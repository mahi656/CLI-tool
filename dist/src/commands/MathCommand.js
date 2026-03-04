"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const logger_1 = require("../utils/logger");
class MathCommand extends BaseCommand_1.BaseCommand {
    register(program) {
        program
            .command('add <x> <y>')
            .description('Add two numbers')
            .action((x, y) => this.execute('add', x, y));
        program
            .command('sub <x> <y>')
            .description('Subtract two numbers (x - y)')
            .action((x, y) => this.execute('sub', x, y));
        program
            .command('mul <x> <y>')
            .description('Multiply two numbers')
            .action((x, y) => this.execute('mul', x, y));
        program
            .command('div <x> <y>')
            .description('Divide two numbers (x / y)')
            .action((x, y) => this.execute('div', x, y));
    }
    execute(operation, x, y) {
        const numX = Number(x);
        const numY = Number(y);
        if (isNaN(numX) || isNaN(numY)) {
            logger_1.logger.error('Both arguments must be valid numbers.');
            return;
        }
        let result;
        switch (operation) {
            case 'add':
                result = numX + numY;
                break;
            case 'sub':
                result = numX - numY;
                break;
            case 'mul':
                result = numX * numY;
                break;
            case 'div':
                if (numY === 0) {
                    logger_1.logger.error('Division by zero is not allowed.');
                    return;
                }
                result = numX / numY;
                break;
        }
        logger_1.logger.info(`Result: ${result}`);
    }
}
exports.MathCommand = MathCommand;