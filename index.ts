import express from "express";
const User = require("./Models/User");
import * as Sequelize from "Sequelize";
import fetch from "node-fetch";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.urlencoded({ extended: false }));
require("dotenv").config();


// Importing Controllers
const UsersController = require("./Controllers/User");

app.get(UsersController.Create.BaseUrl, UsersController.Create.Function);


app.listen(process.env.EXPRESS_PORT);