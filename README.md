# Node + Express Service Starter

This is a simple API sample in Node.js with express.js based on [Google Cloud Run Quickstart](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service).

## Getting Started

Server should run automatically when starting a workspace. To run manually, run:
```sh
npm run dev
```
```
1)Write a Node.js program that creates a simple HTTP server. When a client sends a request to the server,the server should respond with a "Hello, Students!" message

2)Write a Node.js program that reads content from a file named "input.txt" and writes the content to a new file named "output.txt "

3)Write a Node.js program that creates an HTTP server and handles different routes. The server should respond with "Hello, World!" for the root route ("/") and "Page Not Found" for any other route

4)Write a Node.js program that uses the OS module to retrieve information about the current operating system

5)Write a Node.js program that uses the Path module to manipulate file paths

6)Create a command-line Node.js program that simulates a basic calculator. The program should allow users to perform addition, subtraction, multiplication, and division operations on two numbers.

```
```
// 1. Simple HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, Students!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// 2. File Read/Write Program
const fs = require('fs');

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

// 3. HTTP Server with Route Handling
const http = require('http');

const routeServer = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    if (req.url === '/') {
        res.end('Hello, World!');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page Not Found');
    }
});

routeServer.listen(3001, () => {
    console.log('Route Server running at http://localhost:3001/');
});

// 4. OS Module Usage
const os = require('os');

console.log('Operating System Information:');
console.log('---------------------------');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Hostname:', os.hostname());
console.log('Total Memory:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('Free Memory:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('CPU Cores:', os.cpus().length);
console.log('User Info:', os.userInfo());

// 5. Path Module Usage
const path = require('path');

const filePath = '/users/documents/projects/file.txt';

console.log('Path Manipulation Examples:');
console.log('-------------------------');
console.log('Directory name:', path.dirname(filePath));
console.log('File name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));
console.log('Parsed path:', path.parse(filePath));
console.log('Joined path:', path.join('users', 'documents', 'file.txt'));
console.log('Resolved path:', path.resolve('users', 'documents', 'file.txt'));

// 6. Command Line Calculator
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Simple Calculator');
console.log('----------------');
console.log('Operations: +, -, *, /');

function getInput() {
    rl.question('Enter first number: ', (num1) => {
        rl.question('Enter operation (+, -, *, /): ', (operation) => {
            rl.question('Enter second number: ', (num2) => {
                calculate(parseFloat(num1), operation, parseFloat(num2));
            });
        });
    });
}

function calculate(num1, operation, num2) {
    let result;
    
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log('Error: Division by zero!');
                rl.close();
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log('Invalid operation!');
            rl.close();
            return;
    }
    
    console.log(`Result: ${num1} ${operation} ${num2} = ${result}`);
    rl.question('Calculate again? (y/n): ', (answer) => {
        if (answer.toLowerCase() === 'y') {
            getInput();
        } else {
            rl.close();
        }
```
    });
}

// Uncomment to run the calculator
// getInput();
