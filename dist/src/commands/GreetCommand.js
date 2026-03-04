"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const logger_1 = require("../utils/logger");
class GreetCommand extends BaseCommand_1.BaseCommand {
    register(program) {
        program
            .command('greet <name>')
            .description('Greets the given name.')
            .option('-u, --uppercase', 'Print greeting in uppercase')
            .action((name, options) => {
                this.execute(name, options);
            });
    }
    execute(name, options) {
        let msg = `Hello, ${name}! Welcome to the OOP CLI Tool.`;
        if (options.uppercase) {
            msg = msg.toUpperCase();
        }
        logger_1.logger.success(msg);
    }
}
exports.GreetCommand = GreetCommand;