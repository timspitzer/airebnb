require("dotenv").config({ path: ".env." + process.env.NODE_ENV + ".local" });
const express = require("express");
const cors = require("cors");
const routes = require("./routes.js");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/", routes);
app.use("/public/uploads", express.static("public/uploads"));

app.listen(3000, () => {
  console.log("Example app listening at http://localhost:3000");
});
