const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();
require("./db");

app.get("/api", (req, res) => {
  res.json({ message: "Hello Rucha from server!" });
});

const inventoryRouter = require("./Controller/Inventory.controller");

const salesRouter = require("./Controller/Sales.controller");

app.use("/api/items", inventoryRouter);

app.use("/api/sales", salesRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
