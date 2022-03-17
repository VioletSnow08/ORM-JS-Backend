"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import db from "../Configuration/database";
const BaseControllerAction_1 = __importDefault(require("../Models/BaseModels/BaseControllerAction"));
let Create = new BaseControllerAction_1.default("Create", "/Users/Create", "UsersController");
Create.Function = ((req, res, next) => {
    return res.json("Hello There!");
});
module.exports = {
    Create
};
