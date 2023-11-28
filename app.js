const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const allRoutes = require("./routes");

const PORT = process.env.PORT || 3039;

app.use(cors());
app.use(express.json());
app.use(allRoutes);

app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept, Authorization"
    );
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
