import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { OnlyVeHolderClaimingEnabled } from "../generated/schema"
import { OnlyVeHolderClaimingEnabled as OnlyVeHolderClaimingEnabledEvent } from "../generated/FeeDistributor/FeeDistributor"
import { handleOnlyVeHolderClaimingEnabled } from "../src/fee-distributor"
import { createOnlyVeHolderClaimingEnabledEvent } from "./fee-distributor-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let enabled = "boolean Not implemented"
    let newOnlyVeHolderClaimingEnabledEvent = createOnlyVeHolderClaimingEnabledEvent(
      user,
      enabled
    )
    handleOnlyVeHolderClaimingEnabled(newOnlyVeHolderClaimingEnabledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("OnlyVeHolderClaimingEnabled created and stored", () => {
    assert.entityCount("OnlyVeHolderClaimingEnabled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "OnlyVeHolderClaimingEnabled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "OnlyVeHolderClaimingEnabled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "enabled",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
