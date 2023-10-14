const express = require("express");

const Inventory = require("./models/inventory.model");

require("dotenv").config();
require("./db");

const PORT = process.env.PORT || 3001;

const app = express();

// const inventoryRouter = require("./Controller/Inventory.controller");

// const salesRouter = require("./Controller/Sales.controller");

app.use(express.json());

// app.use("/api/items", inventoryRouter);

// app.use("/api/sales", salesRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Hello Rucha from server!" });
});

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
