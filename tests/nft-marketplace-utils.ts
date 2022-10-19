import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  NftMarketplace__ItemBought,
  NftMarketplace__ItemCancelled,
  NftMarketplace__ItemListed,
  NftMarketplace__WithdrewProceeds
} from "../generated/NftMarketplace/NftMarketplace"

export function createNftMarketplace__ItemBoughtEvent(
  buyer: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt
): NftMarketplace__ItemBought {
  let nftMarketplaceItemBoughtEvent = changetype<NftMarketplace__ItemBought>(
    newMockEvent()
  )

  nftMarketplaceItemBoughtEvent.parameters = new Array()

  nftMarketplaceItemBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  nftMarketplaceItemBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftMarketplaceItemBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftMarketplaceItemBoughtEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return nftMarketplaceItemBoughtEvent
}

export function createNftMarketplace__ItemCancelledEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt
): NftMarketplace__ItemCancelled {
  let nftMarketplaceItemCancelledEvent = changetype<
    NftMarketplace__ItemCancelled
  >(newMockEvent())

  nftMarketplaceItemCancelledEvent.parameters = new Array()

  nftMarketplaceItemCancelledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  nftMarketplaceItemCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftMarketplaceItemCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftMarketplaceItemCancelledEvent
}

export function createNftMarketplace__ItemListedEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt
): NftMarketplace__ItemListed {
  let nftMarketplaceItemListedEvent = changetype<NftMarketplace__ItemListed>(
    newMockEvent()
  )

  nftMarketplaceItemListedEvent.parameters = new Array()

  nftMarketplaceItemListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  nftMarketplaceItemListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftMarketplaceItemListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftMarketplaceItemListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return nftMarketplaceItemListedEvent
}

export function createNftMarketplace__WithdrewProceedsEvent(
  seller: Address,
  amount: BigInt
): NftMarketplace__WithdrewProceeds {
  let nftMarketplaceWithdrewProceedsEvent = changetype<
    NftMarketplace__WithdrewProceeds
  >(newMockEvent())

  nftMarketplaceWithdrewProceedsEvent.parameters = new Array()

  nftMarketplaceWithdrewProceedsEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  nftMarketplaceWithdrewProceedsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return nftMarketplaceWithdrewProceedsEvent
}
