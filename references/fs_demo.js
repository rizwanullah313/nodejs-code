const fs = require('fs');
const path = require('path');


// Create Folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder Created...');
});

// Create and Write to File
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),'Hello World I am rizwan Ullah', err => {
    if(err) throw err;
    console.log('File Written to...');
});