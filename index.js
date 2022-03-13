const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
    res.send("Hello World!");
})


app.listen(process.env.EXPRESS_PORT, () => {
    console.log("Server is listening on port " + process.env.EXPRESS_PORT + ".");
})