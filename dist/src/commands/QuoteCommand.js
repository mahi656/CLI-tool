"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const logger_1 = require("../utils/logger");
const axios_1 = __importDefault(require("axios"));
class QuoteCommand extends BaseCommand_1.BaseCommand {
    register(program) {
        program
            .command('quote')
            .description('Get a random inspirational quote (API 3)')
            .action(() => this.execute());
    }
    async execute() {
        try {
            logger_1.logger.info('Fetching a quote...');
            // Using a public quotes API
            const response = await axios_1.default.get('https://api.quotable.io/random');
            const data = response.data;
            logger_1.logger.header(`"${data.content}"`);
            logger_1.logger.success(`- ${data.author}`);
        }
        catch (err) {
            logger_1.logger.error(`Failed to fetch quote: ${err.message}`);
        }
    }
}
exports.QuoteCommand = QuoteCommand;