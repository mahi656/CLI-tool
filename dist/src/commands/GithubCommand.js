"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const logger_1 = require("../utils/logger");
const axios_1 = __importDefault(require("axios"));
class GithubCommand extends BaseCommand_1.BaseCommand {
    register(program) {
        program
            .command('github <username>')
            .description('Fetch basic GitHub user information (API 1)')
            .option('-r, --repos', 'Include recent public repositories list')
            .action((username, options) => {
                this.execute(username, options);
            });
    }
    async execute(username, options) {
        try {
            logger_1.logger.info(`Fetching GitHub data for user: ${username}...`);
            const response = await axios_1.default.get(`https://api.github.com/users/${username}`);
            const data = response.data;
            logger_1.logger.header(`👤 GitHub User: ${data.login || username}`);
            logger_1.logger.text(`Name: ${data.name || 'N/A'}`);
            logger_1.logger.text(`Bio: ${data.bio || 'N/A'}`);
            logger_1.logger.text(`Public Repos: ${data.public_repos}`);
            logger_1.logger.text(`Followers: ${data.followers}`);
            logger_1.logger.text(`Profile: ${data.html_url}`);
            if (options.repos) {
                logger_1.logger.info('\nFetching recent repositories...');
                const repoRes = await axios_1.default.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
                const repos = repoRes.data;
                logger_1.logger.header('📦 Recent Repositories:');
                repos.forEach((r) => {
                    logger_1.logger.text(`- ${r.name} (Stars: ${r.stargazers_count})`);
                });
            }
        }
        catch (err) {
            if (err.response && err.response.status === 404) {
                logger_1.logger.error(`User '${username}' not found on GitHub.`);
            }
            else {
                logger_1.logger.error(`Failed to fetch GitHub info: ${err.message}`);
            }
        }
    }
}
exports.GithubCommand = GithubCommand;