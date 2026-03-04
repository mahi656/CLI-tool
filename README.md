# Simple Node.js CLI Tool

A simple and lightweight Command-Line Interface (CLI) application built using Node.js and [Commander](https://www.npmjs.com/package/commander). This application natively provides multiple math utility commands, file information tracking, and four distinct API integrations without any complex OOP architecture.

## Setup Instructions

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/en/) installed.
2. **Install Dependencies**:
   Open a terminal in the project directory and run:
   ```bash
   npm install
   ```

## Available Commands

The CLI tool supports 10 subcommands divided into 3 categories.

### Standard Commands
- `greet <name>`: Prints a simple greeting to the provided name.
- `fileinfo <filename>`: Gives the total size (in bytes) of a specific file.

### Math Commands
- `add <x> <y>`: Adds two numbers.
- `sub <x> <y>`: Subtracts the second number from the first.
- `mul <x> <y>`: Multiplies two numbers.
- `div <x> <y>`: Divides the first number by the second.

### API Integrations
- `github <username>`: Fetches and displays public GitHub profile info (Followers count, login name) using the GitHub API.
- `weather <city>`: Fetch the current weather conditions directly via wttr.in.
- `quote`: Retrieves a random inspirational quote from dummyjson.
- `joke`: Fetches a random setup/punchline joke from the Official Joke API.

## Example Usage

You can run these commands easily by using `npm start --` followed by your command:
