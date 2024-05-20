import mongoose from "mongoose";

const weatherDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  main: {
    temp: {
      type: Number,
      required: true,
    },
    feels_like: {
      type: Number,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
    pressure: {
      type: Number,
      required: true,
    },
  },
  weather: [{
    description: {
      type: String,
      required: true,
    },
  }],
  wind: {
    speed: {
      type: Number,
      required: true,
    },
  },
}, { timestamps: true });

const Weather = mongoose.model("Weather", weatherDataSchema);
export default Weather;

