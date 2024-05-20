"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dataController_1 = require("../../adapters/controllers/dataController");
var userRoute = express_1.default.Router();
console.log(1);
userRoute.post('store/data', dataController_1.saveWeatherData);
exports.default = userRoute;
