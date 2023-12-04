const mongoose = require("mongoose");

const salesSchema = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Inventory",
  },
  date: {
    type: Date,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;
