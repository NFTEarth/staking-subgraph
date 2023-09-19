import {Transfer} from "../generated/NFTELP/NFTELP";
import { ignoreTransfer } from "./utils/escrow";
import initializeToken from "./utils/initializeToken";
import initializeDepositor from "./utils/initializeDepositor";
import updateBalance from "./utils/eth_calls/updateBalance";

export function handleTransfer(event: Transfer): void {
  /**
   * If the transfer is staking, we let votingEscrow to process the transaction
   */
  if (ignoreTransfer(event)) {
    return;
  }

  let token = initializeToken(event.address);
  let senderTokenAccount = initializeDepositor(event.params.from, token);
  let receiverTokenAccount = initializeDepositor(event.params.to, token);

  updateBalance(
    event.address,
    event.params.from,
    senderTokenAccount
  )

  updateBalance(
    event.address,
    event.params.to,
    receiverTokenAccount
  )
}
