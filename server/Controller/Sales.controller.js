const express = require("express");
const salesRouter = express.Router();

const {
  allSales,
  addNewSales,
  deleteSale,
} = require("../services/Sales.services");

salesRouter.post("/", async (req, res) => {
  try {
    const addSale = req.body;
    const sales = await addNewSales(addSale);
    res.status(200).json({ message: "Success", sales });
  } catch (error) {
    res.status(500).json({ message: "Failure", error: error.message });
  }
});

salesRouter.get("/", async (req, res) => {
  try {
    const sales = await allSales();
    res.status(200).json({ message: "Success", sales });
  } catch (error) {
    res.status(500).json({ message: "Failure", error: error.message });
  }
});

salesRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const sales = await deleteSale(id);
    res.status(200).json({ message: "Success", sales });
  } catch (error) {
    res.status(500).json({ message: "Failure", error: error.message });
  }
});

module.exports = salesRouter;
