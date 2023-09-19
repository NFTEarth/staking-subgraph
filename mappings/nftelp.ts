import {Transfer} from "../generated/NFTELP/NFTELP";
import { ignoreTransfer } from "./utils/escrow";
import initializeToken from "./utils/initializeToken";
import initializeDepositor from "./utils/initializeDepositor";
import fetchBalance from "./utils/eth_calls/fetchBalance";

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

  const senderBalance = fetchBalance(event.params.from)
  senderTokenAccount.totalBalance = senderBalance.minus(senderTokenAccount.lockedBalance);
  senderTokenAccount.save();

  const receiverBalance = fetchBalance(event.params.to)
  receiverTokenAccount.totalBalance = receiverBalance.plus(receiverTokenAccount.lockedBalance);
  receiverTokenAccount.save();
}
