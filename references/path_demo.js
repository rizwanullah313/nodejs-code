const path = require('path');

//Base File name
console.log(path.basename(__filename));

// Directory Name
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));

// Create path Object
// console.log(path.parse(__filename));
console.log(path.parse(__filename).ext);


// concatenate paths
console.log(path.join(__dirname, "test", "hello.html"))