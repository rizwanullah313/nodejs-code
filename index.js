// console.log("Hello Nodes JS Course");

// const Person = require("./person");

// const Person1 = new Person('Rizwan', 24);
// Person1.greeting();


const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data=> console.log(`Called Listner:`, data));

logger.log("Hello Rizwan");
logger.log("Hello World");
logger.log("I am rizwan");
logger.log("Information technology");