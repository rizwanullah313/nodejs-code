// // console.log("Hello Nodes JS Course");

// // const Person = require("./person");

// // const Person1 = new Person('Rizwan', 24);
// // Person1.greeting();


// // const Logger = require('./logger');

// // const logger = new Logger();

// // logger.on('message', data=> console.log(`Called Listner:`, data));

// // logger.log("Hello Rizwan");
// // logger.log("Hello World");
// // logger.log("I am rizwan");
// // logger.log("Information technology");



// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const server = http.createServer((req, res)=>{
// // console.log(req.url);
// if(req.url==='/about'){
//     fs.readFile(
//         path.join(__dirname, 'public', 'about.html'),
//         (err, content)=> {
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content);
//         }
//     );
// }
// });

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server Runing on Port ${PORT}`));












const http = require('http');
const path = require('path');
const fs = require('fs');

// const server = http.createServer((req, res)=>{
// // console.log(req.url);

// if(req.url==='/about'){
//     fs.readFile(
//         path.join(__dirname, 'public', 'about.html'),
//         (err, content)=> {
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content);
//         }
//     );
// }


// if(req.url==='/api/users'){
//     const users = [
//         {name: 'Rizwan Ullah', age: 24},
//         {name: 'Shahzaib', age: 17}
//     ];

//     res.writeHead(200,{'Content-Type': 'applcation/json'});
//     res.end(JSON.stringify(users));
// }
// });


const server = http.createServer((req, res)=>{
  


    // Build File PAth
    let filePath = path.join(__dirname, 'public', req.url==='/'? 'index.html' : req.url);
    // console.log(filePath);
    // res.end();  
    
    // Extension of File
    let extname = path.extname(filePath);

    // Initial Content Type
    let contentType = 'text/html';

    //check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
                // page not found

                fs.readFile(path.join(__dirname, 'public', '404.html'),(err, content)=>
                {
                        res.writeHead(200,{'Content-Type': 'text/html'});
                        res.end(content, 'utf8');
                })
            }
            else{
                // some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }
        else{
            // success
            res.writeHead(200,{'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    });
    });

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Runing on Port ${PORT}`));