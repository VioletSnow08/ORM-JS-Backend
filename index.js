"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User = require("./Models/User");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
require("dotenv").config();
// Importing Controllers
const UsersController = require("./Controllers/User");
app.get(UsersController.Create.BaseUrl, UsersController.Create.Function);
app.listen(process.env.EXPRESS_PORT);
