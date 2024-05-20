"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var weatherDataSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields
var Weather = mongoose_1.default.model("Weather", weatherDataSchema);
exports.default = Weather;
