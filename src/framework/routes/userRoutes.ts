import express from "express";
import { saveWeatherData } from "../../adapters/controllers/dataController";
const userRoute = express.Router();
console.log(1)
userRoute.post('store/data', saveWeatherData);



export default userRoute;