import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Deposit,
  OwnershipTransferred,
  Supply,
  Withdraw
} from "../generated/VotingEscrow/VotingEscrow"

export function createDepositEvent(
  provider: Address,
  value: BigInt,
  locktime: BigInt,
  deposit_type: i32,
  ts: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromAddress(provider))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "locktime",
      ethereum.Value.fromUnsignedBigInt(locktime)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "deposit_type",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(deposit_type))
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("ts", ethereum.Value.fromUnsignedBigInt(ts))
  )

  return depositEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSupplyEvent(prevSupply: BigInt, supply: BigInt): Supply {
  let supplyEvent = changetype<Supply>(newMockEvent())

  supplyEvent.parameters = new Array()

  supplyEvent.parameters.push(
    new ethereum.EventParam(
      "prevSupply",
      ethereum.Value.fromUnsignedBigInt(prevSupply)
    )
  )
  supplyEvent.parameters.push(
    new ethereum.EventParam("supply", ethereum.Value.fromUnsignedBigInt(supply))
  )

  return supplyEvent
}

export function createWithdrawEvent(
  provider: Address,
  value: BigInt,
  ts: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromAddress(provider))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("ts", ethereum.Value.fromUnsignedBigInt(ts))
  )

  return withdrawEvent
}
