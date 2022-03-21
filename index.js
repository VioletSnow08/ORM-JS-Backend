"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User = require("./Models/user");
const body_parser_1 = __importDefault(require("body-parser"));
const multer_1 = __importDefault(require("multer"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true })); // Converts the URL to a safe format
app.use(body_parser_1.default.json()); // Allows for Application/JSON to be used
app.use((0, multer_1.default)().any()); // Allows for Form-Data to be used
require("dotenv").config();
// Importing Controllers
const UsersController = require("./Controllers/user");
app.post(UsersController.Create.BaseUrl, UsersController.Create.Function);
app.listen(process.env.EXPRESS_PORT);
