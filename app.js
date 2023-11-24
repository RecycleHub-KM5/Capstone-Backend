const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const allRoutes = require("./routes");

const PORT = process.env.PORT || 3039;

app.use(cors());
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
    `Server is running on port ${PORT}`;
});
