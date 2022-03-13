const express = require("express");
const User = require("./sequelize/models/User");
const Sequelize = require("sequelize");




const app = express();

app.use(express.urlencoded({ extended: false }));

require("dotenv").config();

app.get("/", (req, res) => {
    User.findAll().then(users => res.json(users)).catch(error => res.json(error))
})


app.listen(process.env.EXPRESS_PORT, () => {
    console.log("Server is listening on port " + process.env.EXPRESS_PORT + ".");
})