"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const logger_1 = require("../utils/logger");
const axios_1 = __importDefault(require("axios"));
class WeatherCommand extends BaseCommand_1.BaseCommand {
    register(program) {
        program
            .command('weather <city>')
            .description('Get current weather for a city (API 2)')
            .action((city) => this.execute(city));
    }
    async execute(city) {
        try {
            logger_1.logger.info(`Fetching weather for ${city}...`);
            // Using wttr.in as a public no-auth weather API that returns JSON
            const response = await axios_1.default.get(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
            const data = response.data;
            const current = data.current_condition[0];
            const area = data.nearest_area[0];
            logger_1.logger.header(`🌤 Weather in ${area.areaName[0].value}, ${area.country[0].value}`);
            logger_1.logger.text(`Temperature: ${current.temp_C}°C / ${current.temp_F}°F`);
            logger_1.logger.text(`Condition: ${current.weatherDesc[0].value}`);
            logger_1.logger.text(`Humidity: ${current.humidity}%`);
            logger_1.logger.text(`Wind: ${current.windspeedKmph} km/h`);
        }
        catch (err) {
            logger_1.logger.error(`Failed to fetch weather data. City might not be found or API is down. (${err.message})`);
        }
    }
}
exports.WeatherCommand = WeatherCommand;