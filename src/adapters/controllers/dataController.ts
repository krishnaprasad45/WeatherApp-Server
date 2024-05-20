import Weather from '../data-access/models/weatherDataModel';


export const saveWeatherData = async (weatherData: any) => {
    try {
        console.log(3)
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
    }
};
