const express = require("express");
const inventoryRouter = express.Router();

const {
  addNewInventory,
  allInventoryItems,
  updateInventoryItem,
  deleteInventoryItem,
} = require("../services/Inventory.services.js");

inventoryRouter.post("/", async (req, res) => {
  try {
    const addItem = req.body;
    const allItems = await addNewInventory(addItem);
    res.status(200).json({ message: "Success", allItems });
  } catch (error) {
    res.status(500).json({ message: "Failure", error: error.message });
  }
});

inventoryRouter.get("/", async (req, res) => {
  try {
    const allItems = await allInventoryItems();
    res.status(200).json({ message: "Success", allItems });
  } catch (error) {
    res.status(500).json({ message: "Failure", error: error.message });
  }
});

inventoryRouter.post("/:id", async (req, res) => {
  try {
    const updateData = req.body;
    const allItems = await updateInventoryItem(req.params.id, updateData);
    res.status(200).json({ message: "Success", allItems });
  } catch (error) {
    res.status(500).json({ message: "Failure", error: error.message });
  }
});

inventoryRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const allItems = await deleteInventoryItem(id);
    res.status(200).json({ message: "Success", allItems });
  } catch (error) {
    res.status(500).json({ message: "Failure", error: error.message });
  }
});

module.exports = inventoryRouter;
