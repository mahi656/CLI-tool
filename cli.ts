#!/usr/bin/env node
const { Command } = require('commander');
const axios = require('axios');
const fs = require('fs');

const program = new Command();

program
    .command('greet <name>')
    .action((name) => console.log(`Hello, ${name}!`));

program
    .command("add <x> <y>")
    .action((x, y) => console.log(Number(x) + Number(y)));

program
    .command("mul <x> <y>")
    .action((x, y) => console.log(Number(x) * Number(y)));

program
    .command("sub <x> <y>")
    .action((x, y) => console.log(Number(x) - Number(y)));

program
    .command("div <x> <y>")
    .action((x, y) => console.log(Number(x) / Number(y)));

program
    .command('joke')
    .action(async () => {
        try {
            const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
            console.log(response.data.setup);
            console.log(response.data.punchline);
        } catch (err) {
            console.log("Error:", err.message);
        }
    });

program
    .command('fileinfo <filename>')
    .action((filename) => {
        try {
            const stats = fs.statSync(filename);
            console.log("Size:", stats.size, "bytes");
        } catch (err) {
            console.log("Error:", err.message);
        }
    });

program
    .command('github <username>')
    .action(async (username) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log("User:", response.data.login);
            console.log("Followers:", response.data.followers);
        } catch (err) {
            console.log("Error finding user");
        }
    });

program
    .command('weather <city>')
    .action(async (city) => {
        try {
            const response = await axios.get(`https://wttr.in/${city}?format=3`);
            console.log(response.data);
        } catch (err) {
            console.log("Error fetching weather");
        }
    });

program
    .command('quote')
    .action(async () => {
        try {
            const response = await axios.get('https://dummyjson.com/quotes/random');
            console.log(`"${response.data.quote}" - ${response.data.author}`);
        } catch (err) {
            console.log("Error fetching quote");
        }
    });

program.parse();