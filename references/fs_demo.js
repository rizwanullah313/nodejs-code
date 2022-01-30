const fs = require('fs');
const path = require('path');


// Create Folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder Created...');
// });

// Create and Write to File
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),'Hello World I am rizwan Ullah', err => {
//     if(err) throw err;
//     console.log('File Written to...');
// });

// if uper wala copy kerky same to same run kerny our details change kerny per text overwrite hojyega
// ager two time use kerna howa tu appendfile kerna hoga

// Create and Write to File


// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),'I am a PROGRAMMER!', err => {
//     if(err) throw err;
//     console.log('File Written to...');
// });

// Read File    
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });


// File Rename
fs.rename(path.join(__dirname, '/test', 'hello.txt'),path.join(__dirname, '/test', 'index.txt'), err => {
    if(err) throw err;
    console.log("File Rename....");
});
