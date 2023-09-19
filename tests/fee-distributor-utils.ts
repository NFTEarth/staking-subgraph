import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OnlyVeHolderClaimingEnabled,
  OwnershipTransferred,
  TokenCheckpointed,
  TokenClaimingEnabled,
  TokenWithdrawn,
  TokensClaimed
} from "../generated/FeeDistributor/FeeDistributor"

export function createOnlyVeHolderClaimingEnabledEvent(
  user: Address,
  enabled: boolean
): OnlyVeHolderClaimingEnabled {
  let onlyVeHolderClaimingEnabledEvent = changetype<
    OnlyVeHolderClaimingEnabled
  >(newMockEvent())

  onlyVeHolderClaimingEnabledEvent.parameters = new Array()

  onlyVeHolderClaimingEnabledEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  onlyVeHolderClaimingEnabledEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return onlyVeHolderClaimingEnabledEvent
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

export function createTokenCheckpointedEvent(
  token: Address,
  amount: BigInt,
  lastCheckpointTimestamp: BigInt
): TokenCheckpointed {
  let tokenCheckpointedEvent = changetype<TokenCheckpointed>(newMockEvent())

  tokenCheckpointedEvent.parameters = new Array()

  tokenCheckpointedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenCheckpointedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokenCheckpointedEvent.parameters.push(
    new ethereum.EventParam(
      "lastCheckpointTimestamp",
      ethereum.Value.fromUnsignedBigInt(lastCheckpointTimestamp)
    )
  )

  return tokenCheckpointedEvent
}

export function createTokenClaimingEnabledEvent(
  token: Address,
  enabled: boolean
): TokenClaimingEnabled {
  let tokenClaimingEnabledEvent = changetype<TokenClaimingEnabled>(
    newMockEvent()
  )

  tokenClaimingEnabledEvent.parameters = new Array()

  tokenClaimingEnabledEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenClaimingEnabledEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return tokenClaimingEnabledEvent
}

export function createTokenWithdrawnEvent(
  token: Address,
  amount: BigInt,
  recipient: Address
): TokenWithdrawn {
  let tokenWithdrawnEvent = changetype<TokenWithdrawn>(newMockEvent())

  tokenWithdrawnEvent.parameters = new Array()

  tokenWithdrawnEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokenWithdrawnEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return tokenWithdrawnEvent
}

export function createTokensClaimedEvent(
  user: Address,
  token: Address,
  amount: BigInt,
  userTokenTimeCursor: BigInt
): TokensClaimed {
  let tokensClaimedEvent = changetype<TokensClaimed>(newMockEvent())

  tokensClaimedEvent.parameters = new Array()

  tokensClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  tokensClaimedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokensClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokensClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "userTokenTimeCursor",
      ethereum.Value.fromUnsignedBigInt(userTokenTimeCursor)
    )
  )

  return tokensClaimedEvent
}
