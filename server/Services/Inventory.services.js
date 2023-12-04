const Inventory = require("../models/inventory.model");

async function addNewInventory(inventoData) {
  try {
    const newItem = new Inventory(inventoData);
    const inventoryItem = await newItem.save();
    const allItems = await allInventoryItems();
    return allItems;
  } catch (error) {
    throw new Error(error);
  }
}

async function allInventoryItems() {
  try {
    const allItems = await Inventory.find();
    return allItems;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateInventoryItem(id, dataToUpdate) {
  try {
    const itemToUpdate = await Inventory.findByIdAndUpdate(id, dataToUpdate, {
      new: true,
    });
    const allItems = await allInventoryItems();
    return allItems;
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteInventoryItem(id) {
  try {
    const itemToDelete = await Inventory.findByIdAndDelete(id);
    const allItems = await allInventoryItems();
    return allItems;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  addNewInventory,
  allInventoryItems,
  updateInventoryItem,
  deleteInventoryItem,
};
