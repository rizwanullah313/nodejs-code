const http = require('http');

// Create Server Object
http.createServer((req, res)=>{
    // Write reponse
    res.write('Hello Server');
    res.end();
}).listen(5000, ()=>console.log('Server Runing....'));  