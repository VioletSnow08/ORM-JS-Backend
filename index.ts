import express from "express";
const User = require("./Models/user");
import * as Sequelize from "Sequelize";
import fetch from "node-fetch";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import multer from "multer";

const app = express();

app.use(bodyParser.urlencoded({extended: true})); // Converts the URL to a safe format
app.use(bodyParser.json()); // Allows for Application/JSON to be used
app.use(multer().any()) // Allows for Form-Data to be used
require("dotenv").config();


// Importing Controllers
const UsersController = require("./Controllers/user");

app.post(UsersController.create.BaseUrl, UsersController.create.Function);


app.listen(process.env.EXPRESS_PORT);