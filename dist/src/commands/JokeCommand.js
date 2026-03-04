"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokeCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const logger_1 = require("../utils/logger");
const axios_1 = __importDefault(require("axios"));
class JokeCommand extends BaseCommand_1.BaseCommand {
    register(program) {
        program
            .command('joke')
            .description('Get a random programming or general joke')
            .action(() => this.execute());
    }
    async execute() {
        try {
            logger_1.logger.info('Fetching a joke...');
            const response = await axios_1.default.get('https://official-joke-api.appspot.com/random_joke');
            logger_1.logger.header(response.data.setup);
            // Artificial delay for comedic effect
            setTimeout(() => {
                logger_1.logger.success(response.data.punchline);
            }, 1000);
        }
        catch (err) {
            logger_1.logger.error(`Failed to fetch joke: ${err.message}`);
        }
    }
}
exports.JokeCommand = JokeCommand;