"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function (o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileInfoCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const logger_1 = require("../utils/logger");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class FileInfoCommand extends BaseCommand_1.BaseCommand {
    register(program) {
        program
            .command('fileinfo <filename>')
            .description('Get metadata about a file')
            .action((filename) => this.execute(filename));
    }
    execute(filename) {
        const filePath = path.resolve(process.cwd(), filename);
        if (!fs.existsSync(filePath)) {
            logger_1.logger.error(`File not found: ${filePath}`);
            return;
        }
        try {
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                logger_1.logger.error('The provided path is a directory, not a file.');
                return;
            }
            logger_1.logger.header(`File Information: ${filename}`);
            logger_1.logger.text(`Path: ${filePath}`);
            logger_1.logger.text(`Size: ${stats.size} bytes`);
            logger_1.logger.text(`Created: ${stats.birthtime.toLocaleString()}`);
            logger_1.logger.text(`Modified: ${stats.mtime.toLocaleString()}`);
            // If it's a realistic text file, count lines quickly
            if (stats.size < 1024 * 1024 * 5) { // < 5MB
                const content = fs.readFileSync(filePath, 'utf-8');
                const lines = content.split('\n').length;
                logger_1.logger.text(`Lines: ${lines}`);
            }
            else {
                logger_1.logger.text('Lines: (File too large to count quickly)');
            }
        }
        catch (err) {
            logger_1.logger.error(`Error reading file info: ${err.message}`);
        }
    }
}
exports.FileInfoCommand = FileInfoCommand;