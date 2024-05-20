"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userRoute = express_1.default.Router();
var dataController_1 = require("../../adapters/controllers/dataController");
userRoute.post('/weather', dataController_1.getWeatherData);
userRoute.get('/get/history', dataController_1.getRecords);
exports.default = userRoute;
