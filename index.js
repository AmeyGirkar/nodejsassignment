import express from 'express';
import fs from 'fs';
import path from 'path';
import os  from 'os';
import http from 'http';

const app = express();
const port = parseInt(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


//1) Write a Node.js program that creates a simple HTTP server. When a client sends a request to the server, the server should respond with a "Hello, Students!" message
app.get('/', (req, res) => {
  const name = process.env.NAME || 'Student';
  res.send(`Hello ${name}!`);
});

// 2)Write a Node.js program that reads content from a file named "input.txt" and writes the content to a new file named "output.txt "
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
      console.error('Error reading file:', err);
      return;
  }
  fs.writeFile('output.txt', data, 'utf8', (err) => {
      if (err) {
          console.error('Error writing file:', err);
          return;
      }
      console.log('File written successfully!');
  });
});

// 3)Write a Node.js program that uses the OS module to retrieve information about the current operating system
console.log('Operating System Information:');
console.log('---------------------------');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Hostname:', os.hostname());
console.log('Total Memory:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('Free Memory:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('CPU Cores:', os.cpus().length);
console.log('User Info:', os.userInfo());

// 4)Write a Node.js program that uses the Path module to manipulate file paths


const filePath = '/home/user/nodejsassignment/input.txt';
console.log('Path Manipulation Examples:');
console.log('-------------------------');
console.log('Directory name:', path.dirname(filePath));
console.log('File name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));
console.log('Parsed path:', path.parse(filePath));
console.log('Joined path:', path.join('users', 'documents', 'file.txt'));
console.log('Resolved path:', path.resolve('users', 'documents', 'file.txt'));

//5)users to perform addition, subtraction, multiplication, and division operations on two numbers.


import readline from 'readline';

class Calculator {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async getInput(prompt) {
        return new Promise(resolve => {
            this.rl.question(prompt, answer => resolve(answer));
        });
    }

    calculate(num1, operation, num2) {
        const operations = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => b !== 0 ? a / b : null
        };

        return operations[operation]?.(num1, num2);
    }

    async run() {
        try {
            while (true) {
                const num1 = parseFloat(await this.getInput('Enter first number: '));
                const operation = await this.getInput('Enter operation (+, -, *, /): ');
                const num2 = parseFloat(await this.getInput('Enter second number: '));

                const result = this.calculate(num1, operation, num2);

                if (result === null) {
                    console.log('Error: Division by zero!');
                } else if (result === undefined) {
                    console.log('Invalid operation!');
                } else {
                    console.log(`Result: ${num1} ${operation} ${num2} = ${result}`);
                }

                const again = await this.getInput('Calculate again? (y/n): ');
                if (again.toLowerCase() !== 'y') break;
            }
        } catch (err) {
            console.error('Error:', err.message);
        } finally {
            this.rl.close();
        }
    }
}

// Uncomment to run the calculator
const calculator = new Calculator();
calculator.run();

// 6)Write a Node.js program that creates an HTTP server and handles different routes. The server should respond with "Hello, World!" for the root route ("/") and "Page Not Found" for any other route

// const routeServer = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
  
//   if (req.url === '/http') {
//       res.end('Hello, World!');
//   } else {
//       res.writeHead(404, {'Content-Type': 'text/plain'});
//       res.end('Page Not Found');
//   }
// });

// routeServer.listen(3001, () => {
//   console.log('Route Server running at http://localhost:3001/');
// });