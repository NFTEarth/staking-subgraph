import {Address, BigInt} from "@graphprotocol/graph-ts";
import {NFTELPToken} from "../../generated/schema";
import {NFTELP} from "../../generated/NFTELP/NFTELP";

const initializeToken = (address: Address) : NFTELPToken => {
  const tokenAddress = address.toHexString()
  let token = NFTELPToken.load(tokenAddress);

  if (token == null) {
    token = new NFTELPToken(tokenAddress);
    let tokenContract = NFTELP.bind(Address.fromString(tokenAddress));
    token.name = tokenContract.name();
    token.symbol = tokenContract.symbol();
    token.numHolders = 0;
    token.holders = [];
    token.totalSupply = tokenContract.totalSupply();
    token.totalStaked = BigInt.fromI32(0);
    token.save();
  }
  return token as NFTELPToken;
}

export default initializeToken;