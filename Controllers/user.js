"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseControllerAction_1 = __importDefault(require("../Models/BaseModels/baseControllerAction"));
const user_1 = __importDefault(require("../Models/user"));
const Services_1 = __importDefault(require("../Services"));
let Create = new baseControllerAction_1.default("Create", "/Users/Create", "UsersController");
Create.Function = ((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!Services_1.default.passwordService.isValid(req.body.password))
        return res.json({ "Error": "Invalid Password" });
    user_1.default.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.username,
        password: Services_1.default.passwordService.hashPassword(req.body.password)
    }).then((newUser) => {
        return res.json(newUser);
    }).catch((error) => {
        return res.json(error);
    });
}));
module.exports = {
    Create
};
