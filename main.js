const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]
// define function that sets the price of a phone object in the inventory map
const addPhoneToInventory = (inventory, phoneObject, price) => {
    inventory.set(phoneObject, price);
    return inventory
}
// create inventory map
let inventory = new Map()
// for each phone in current phone object
// save price in new variable
// delete price property
// set phone and price to inventory map using function
for (const phone of phones){
    const price = phone.price
    delete phone.price
    inventory = addPhoneToInventory(inventory, phone, price)
}
// console log testing output
console.log(phones)
console.log("---------")
console.log(inventory)