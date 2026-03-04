<div align="center">
  <h1>⚡ Super CLI Tool ⚡</h1>
  <p><i>A fast, lightweight, and versatile Command-Line Interface built with Node.js</i></p>
</div>

---

## 🚀 Overview

Welcome to **Super CLI**! This application is powered by [Commander.js](https://www.npmjs.com/package/commander) and gives you access to a suite of handy tools right from your terminal. Whether you need quick math calculations, file diagnostics, or live API data (like weather, GitHub stats, jokes, or quotes), this CLI has you covered!

---

## 🛠️ Installation & Setup

1. **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine.
2. **Install Dependencies**:
   Open a terminal in the project directory and run:
   ```bash
   npm install
   ```

---

## 💻 Available Commands

Using the tool is easy! Just prefix any command with `npm start -- `. Here's what you can do:

### 🌟 Utilities
| Command | Description | Example |
|---|---|---|
| `greet <name>` | Say hello to someone | `npm start -- greet Mahi` |
| `fileinfo <filename>` | Get the precise size of a file in bytes | `npm start -- fileinfo data.txt` |

### 🧮 Math Operations
| Command | Description | Example |
|---|---|---|
| `add <x> <y>` | Add two numbers | `npm start -- add 5 10` |
| `sub <x> <y>` | Subtract y from x | `npm start -- sub 20 5` |
| `mul <x> <y>` | Multiply two numbers | `npm start -- mul 4 5` |
| `div <x> <y>` | Divide x by y | `npm start -- div 100 4` |

### 🌐 Live API Integrations
| Command | Description | Example |
|---|---|---|
| `weather <city>` | Discover current weather conditions ⛅ | `npm start -- weather Tokyo` |
| `github <username>` | Lookup GitHub follower stats 🐙 | `npm start -- github torvalds` |
| `quote` | Get a random stroke of inspiration 💭 | `npm start -- quote` |
| `joke` | Have a quick laugh 😂 | `npm start -- joke` |

---

<div align="center">
  <p>Built as a learning project for building Node CLI applications.</p>
</div>

