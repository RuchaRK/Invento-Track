const Sales = require("../models/sales.model");

async function allSales() {
  try {
    const allSales = await Sales.find().populate("product", "name");
    return allSales;
  } catch (error) {
    throw new Error(error);
  }
}

async function addNewSales(saleData) {
  try {
    const sale = new Sales(saleData);
    const newSale = await sale.save();
    const sales = await allSales();
    return sales;
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteSale(id) {
  try {
    const itemToDelete = await Sales.findByIdAndDelete(id);
    const sales = await allSales();
    return sales;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  allSales,
  addNewSales,
  deleteSale,
};
