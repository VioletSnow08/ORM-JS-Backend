"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("md5"));
class passwordService {
    static hashPassword(password) {
        return (0, md5_1.default)(password);
    }
    static isValid(password) {
        return true;
        // return "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).*".match(password); // One capital letter, one lowercase letter, one number.
    }
}
exports.default = passwordService;
