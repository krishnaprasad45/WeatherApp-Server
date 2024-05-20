import express from "express";
const userRoute = express.Router();
import { getRecords, getWeatherData } from "../../adapters/controllers/dataController";
userRoute.post('/weather', getWeatherData);
userRoute.get('/get/history', getRecords);



export default userRoute;