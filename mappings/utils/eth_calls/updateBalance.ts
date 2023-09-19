import {Address} from "@graphprotocol/graph-ts";
import {NFTELP} from "../../../generated/NFTELP/NFTELP";
import {Depositor} from "../../../generated/schema";

const updateBalance = (tokenAddress: Address, userAddress: Address, depositor: Depositor) : void => {
  const token = NFTELP.bind(tokenAddress);
  let callResult = token.try_balanceOf(userAddress);

  if (!callResult.reverted) {
    depositor.totalBalance = callResult.value.plus(depositor.lockedBalance);
    depositor.save();
  }
}

export default updateBalance