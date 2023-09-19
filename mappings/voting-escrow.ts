import { BigInt, log } from "@graphprotocol/graph-ts";
import {NFTELPToken, Transaction} from "../generated/schema";
import { Deposit, Withdraw } from "../generated/VotingEscrow/VotingEscrow";
import {NFTE_LP_ADDRESS} from "./utils/config/address-arbitrum";
import initializeDepositor from "./utils/initializeDepositor";

export function handleDeposit(event: Deposit): void {
  let token = NFTELPToken.load(NFTE_LP_ADDRESS.toHexString());

  if (!token) {
    log.error("Something wrong at transaction {}", [
      event.transaction.hash.toHexString()
    ]);
    return;
  }

  let activity = "stake";
  let tokenAccount = initializeDepositor(event.params.provider, token);

  /**
   * Check if user had previous staked
   * When user has previous stake, the activity will either be increasing stake amount of increasing stake duration
   */
  if (tokenAccount.lockStartTimestamp) {
    activity = event.params.value.isZero()
      ? "increaseStakeDuration"
      : "increaseStakeAmount";
  }

  /**
   * Locked balance will be set back to 0 on withdraw. If they are not, it simply mean the transaction is either increase amount or increase lock time
   */
  tokenAccount.lockedBalance = tokenAccount.lockedBalance.plus(event.params.value);
  tokenAccount.lockStartTimestamp =
    tokenAccount.lockStartTimestamp || event.block.timestamp;
  tokenAccount.lockEndTimestamp = event.params.locktime;

  tokenAccount.save();

  /**
   * Add amount into total staked
   */
  token.totalStaked = token.totalStaked.plus(event.params.value);
  token.save();

  const tx = new Transaction(event.transaction.hash.toHexString());
  tx.type = activity
  tx.address = event.transaction.from
  tx.txhash = event.transaction.hash
  tx.timestamp = event.block.timestamp
  tx.amount = event.params.value
  tx.save()
}

export function handleWithdraw(event: Withdraw): void {
  let token = NFTELPToken.load(NFTE_LP_ADDRESS.toHexString());

  if (!token) {
    log.error("Something wrong at transaction {}", [
      event.transaction.hash.toHexString()
    ]);
    return;
  }

  let tokenAccount = initializeDepositor(event.params.provider, token);
  tokenAccount.lockedBalance = BigInt.fromI32(0);
  tokenAccount.lockStartTimestamp = null;
  tokenAccount.lockEndTimestamp = null;

  tokenAccount.save();

  /**
   * Deduct from total staked
   */
  token.totalStaked = token.totalStaked.minus(event.params.value);
  token.save();

  const tx = new Transaction(event.transaction.hash.toHexString());
  tx.type = 'unstake'
  tx.address = event.transaction.from
  tx.txhash = event.transaction.hash
  tx.timestamp = event.block.timestamp
  tx.amount = event.params.value
  tx.save()
}
