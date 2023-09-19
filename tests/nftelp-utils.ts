import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  Deposit,
  Rebalance,
  SetFee,
  Transfer,
  Withdraw,
  ZeroBurn
} from "../generated/NFTELP/NFTELP"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createDepositEvent(
  sender: Address,
  to: Address,
  shares: BigInt,
  amount0: BigInt,
  amount1: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "amount0",
      ethereum.Value.fromUnsignedBigInt(amount0)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "amount1",
      ethereum.Value.fromUnsignedBigInt(amount1)
    )
  )

  return depositEvent
}

export function createRebalanceEvent(
  tick: i32,
  totalAmount0: BigInt,
  totalAmount1: BigInt,
  feeAmount0: BigInt,
  feeAmount1: BigInt,
  totalSupply: BigInt
): Rebalance {
  let rebalanceEvent = changetype<Rebalance>(newMockEvent())

  rebalanceEvent.parameters = new Array()

  rebalanceEvent.parameters.push(
    new ethereum.EventParam("tick", ethereum.Value.fromI32(tick))
  )
  rebalanceEvent.parameters.push(
    new ethereum.EventParam(
      "totalAmount0",
      ethereum.Value.fromUnsignedBigInt(totalAmount0)
    )
  )
  rebalanceEvent.parameters.push(
    new ethereum.EventParam(
      "totalAmount1",
      ethereum.Value.fromUnsignedBigInt(totalAmount1)
    )
  )
  rebalanceEvent.parameters.push(
    new ethereum.EventParam(
      "feeAmount0",
      ethereum.Value.fromUnsignedBigInt(feeAmount0)
    )
  )
  rebalanceEvent.parameters.push(
    new ethereum.EventParam(
      "feeAmount1",
      ethereum.Value.fromUnsignedBigInt(feeAmount1)
    )
  )
  rebalanceEvent.parameters.push(
    new ethereum.EventParam(
      "totalSupply",
      ethereum.Value.fromUnsignedBigInt(totalSupply)
    )
  )

  return rebalanceEvent
}

export function createSetFeeEvent(newFee: i32): SetFee {
  let setFeeEvent = changetype<SetFee>(newMockEvent())

  setFeeEvent.parameters = new Array()

  setFeeEvent.parameters.push(
    new ethereum.EventParam(
      "newFee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newFee))
    )
  )

  return setFeeEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createWithdrawEvent(
  sender: Address,
  to: Address,
  shares: BigInt,
  amount0: BigInt,
  amount1: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "amount0",
      ethereum.Value.fromUnsignedBigInt(amount0)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "amount1",
      ethereum.Value.fromUnsignedBigInt(amount1)
    )
  )

  return withdrawEvent
}

export function createZeroBurnEvent(
  fee: i32,
  fees0: BigInt,
  fees1: BigInt
): ZeroBurn {
  let zeroBurnEvent = changetype<ZeroBurn>(newMockEvent())

  zeroBurnEvent.parameters = new Array()

  zeroBurnEvent.parameters.push(
    new ethereum.EventParam(
      "fee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee))
    )
  )
  zeroBurnEvent.parameters.push(
    new ethereum.EventParam("fees0", ethereum.Value.fromUnsignedBigInt(fees0))
  )
  zeroBurnEvent.parameters.push(
    new ethereum.EventParam("fees1", ethereum.Value.fromUnsignedBigInt(fees1))
  )

  return zeroBurnEvent
}
