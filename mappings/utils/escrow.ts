import {Transfer} from "../../generated/NFTELP/NFTELP";
import {VOTING_ESCROW_ADDRESS} from "./config/address-arbitrum";

export function ignoreTransfer(transfer: Transfer): boolean {
  return (
    VOTING_ESCROW_ADDRESS !== null &&
    (transfer.params.from.equals(VOTING_ESCROW_ADDRESS) ||
      transfer.params.to.equals(VOTING_ESCROW_ADDRESS))
  );
}
