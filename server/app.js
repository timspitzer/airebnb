require("dotenv").config({ path: ".env." + process.env.NODE_ENV + ".local" });
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
const usersRoute = require("./routes/users.js");
const propertiesRoute = require("./routes/properties.js");

app.use("/users", usersRoute);
app.use("/properties", propertiesRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
