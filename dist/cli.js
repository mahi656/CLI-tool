#!/usr/bin/env node
const { Command } = require('commander');
const axios = require('axios');
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
    .description('random joke')
    .action(async () => {
        try {
            const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
            console.log(response.data.setup);
            console.log(response.data.punchline);
        }
        catch (err) {
            console.log(err);
        }
    });
program.parse();