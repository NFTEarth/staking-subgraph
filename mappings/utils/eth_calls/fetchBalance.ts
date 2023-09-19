import {Address, BigInt} from "@graphprotocol/graph-ts";
import { NFTE_LP_ADDRESS } from "../config/address-arbitrum";
import {NFTELP} from "../../../generated/NFTELP/NFTELP";

const fetchBalance = (address: Address) : BigInt => {
  const token = NFTELP.bind(NFTE_LP_ADDRESS);

  return token.balanceOf(address);
}

export default fetchBalance