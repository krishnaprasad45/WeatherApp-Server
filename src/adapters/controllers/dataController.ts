import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import Weather from '../data-access/models/weatherDataModel';
import { getRecordsFromDB } from '../data-access/repositories/documentRepository';

const weatherApi = process.env.OPENWEATHER_API_KEY; // OpenWeatherMap API key

export const getWeatherData = async (req: Request, res: Response, next: NextFunction) => {
    const city = req.body.data;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                units: 'metric',
                appid: weatherApi
            }
        });

        await saveWeatherData(response.data);

        res.json(response.data);
    } catch (error) {
        console.error(error);
        next(error)
    }
};

export const saveWeatherData = async (weatherData: any) => {
    try {
        const newWeather = new Weather({
            name: weatherData.name,
            main: {
                temp: weatherData.main.temp,
                feels_like: weatherData.main.feels_like,
                humidity: weatherData.main.humidity,
                pressure: weatherData.main.pressure,
            },
            weather: weatherData.weather.map((w: any) => ({ description: w.description })),
            wind: {
                speed: weatherData.wind.speed,
            },
        });
        await newWeather.save();

    } catch (error) {
        console.error('Error saving weather data:', error);
        throw error;
    }
};


export async function getRecords(req: Request, res: Response) {
    try {
        const records = await getRecordsFromDB();
        if (records) res.status(200).json(records);
        else {
            throw new Error("User not found in the database");
        }
    } catch (error) {
        console.error("Error fetching records:", error);
        throw error;
    }
}
