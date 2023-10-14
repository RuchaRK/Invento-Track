const Inventory = require("../models/inventory.model");

async function addNewInventory(inventoData) {
  try {
    const newItem = new Inventory(inventoData);
    const inventoryItem = await newItem.save();
    console.log(newItem);
  } catch (error) {
    console.log(error);
  }
}

const newItem = {
  name: "Coffee Maker",
  quantity: 5,
  price: 49.99,
  category: "Kitchen Appliances",
};

addNewInventory(newItem);
