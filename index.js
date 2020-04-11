const express = require("express");
const app = express();
const setupDB = require("./config/database");
const router = require("./config/routes");
const port = 3043;

app.use(express.json());
app.use("/users", router);

setupDB();
app.listen(port, () => {
  console.log('connected');
});