import {Address, BigInt} from "@graphprotocol/graph-ts";
import {Depositor, NFTELPToken} from "../../generated/schema";

const initializeDepositor = (address: Address, token: NFTELPToken) : Depositor => {
  let depositorId = address.toHexString();
  let depositor = Depositor.load(depositorId)

  if (!depositor) {
    let holders = token.holders;
    holders.push(address);
    token.holders = holders;

    token.numHolders = token.numHolders + 1;
    token.save();

    depositor = new Depositor(depositorId);
    depositor.token = token.id;
    depositor.totalBalance = BigInt.fromI32(0);
    depositor.lockedBalance = BigInt.fromI32(0);
    depositor.save();
  }

  return depositor
}

export default initializeDepositor;