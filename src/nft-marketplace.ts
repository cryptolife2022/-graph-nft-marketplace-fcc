import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
    NftMarketplace,
    NftMarketplace__ItemBought as ItemBoughtEvent,
    NftMarketplace__ItemCancelled as ItemCancelledEvent,
    NftMarketplace__ItemListed as ItemListedEvent,
    NftMarketplace__WithdrewProceeds as ItemWithdrewEvent
} from "../generated/NftMarketplace/NftMarketplace"
import {
    NftMarketplace__ActiveItem,
    NftMarketplace__ItemBought,
    NftMarketplace__ItemCancelled,
    NftMarketplace__ItemListed,
    NftMarketplace__WithdrewProceeds
} from "../generated/schema"

const deadAddress = "0x000000000000000000000000000000000000dEaD"
const nullAddress = "0x0000000000000000000000000000000000000000"

function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
    return tokenId.toHexString() + nftAddress.toHexString()
}

export function handleNftMarketplace__ItemBought(event: ItemBoughtEvent): void {
    // Save to Graph
    // Update ActiveItem
    // Get or Create ItemListed Object
    // ItemId
    // ItemBoughtEvent, ItemBoughtObject
    const id = getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    let itemBought = NftMarketplace__ItemBought.load(id)
    itemBought = itemBought ? itemBought : new NftMarketplace__ItemBought(id)
    let activeItem = NftMarketplace__ActiveItem.load(id)

    itemBought.buyer = event.params.buyer
    itemBought.nftAddress = event.params.nftAddress
    itemBought.tokenId = event.params.tokenId

    activeItem!.buyer = event.params.buyer

    itemBought.save()
    activeItem!.save()
}

export function handleNftMarketplace__ItemCancelled(event: ItemCancelledEvent): void {
    const id = getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    let itemCancelled = NftMarketplace__ItemCancelled.load(id)
    itemCancelled = itemCancelled ? itemCancelled : new NftMarketplace__ItemCancelled(id)
    let activeItem = NftMarketplace__ActiveItem.load(id)

    itemCancelled.seller = event.params.seller
    itemCancelled.nftAddress = event.params.nftAddress
    itemCancelled.tokenId = event.params.tokenId

    activeItem!.buyer = Address.fromString(deadAddress)

    itemCancelled.save()
    activeItem!.save()
}

export function handleNftMarketplace__ItemListed(event: ItemListedEvent): void {
    const id = getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    let itemListed = NftMarketplace__ItemListed.load(id)
    itemListed = itemListed ? itemListed : new NftMarketplace__ItemListed(id)
    let activeItem = NftMarketplace__ActiveItem.load(id)
    activeItem = activeItem ? activeItem : new NftMarketplace__ActiveItem(id)
    itemListed.seller = event.params.seller
    activeItem.seller = event.params.seller

    itemListed.nftAddress = event.params.nftAddress
    activeItem.nftAddress = event.params.nftAddress

    itemListed.tokenId = event.params.tokenId
    activeItem.tokenId = event.params.tokenId

    itemListed.price = event.params.price
    activeItem.price = event.params.price

    activeItem.buyer = Address.fromString(nullAddress)

    itemListed.save()
    activeItem.save()
}

//export function handleNftMarketplace__WithdrewProceeds(event: ItemWithdrewEvent): void {}
