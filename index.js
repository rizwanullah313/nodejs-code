// console.log("Hello Nodes JS Course");

// const Person = require("./person");

// const Person1 = new Person('Rizwan', 24);
// Person1.greeting();


// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data=> console.log(`Called Listner:`, data));

// logger.log("Hello Rizwan");
// logger.log("Hello World");
// logger.log("I am rizwan");
// logger.log("Information technology");



const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res)=>{
// console.log(req.url);
if(req.url==='/about'){
    fs.readFile(
        path.join(__dirname, 'public', 'about.html'),
        (err, content)=> {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        }
    );
}
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Runing on Port ${PORT}`));