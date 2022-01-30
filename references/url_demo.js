const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized URL (property) URL.href: string

console.log(myUrl.href);
console.log(myUrl.toString());

// Host (Root Domain)
console.log(myUrl.host);    
// Host name
// host name doesnot get the port
console.log(myUrl.hostname);    

// Path name
console.log(myUrl.pathname);

// Serliazed Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append("abc","123");
console.log(myUrl.searchParams);

// Loop through Params
myUrl.searchParams.forEach((value1, name1)=> console.log(`${name1}: ${value1}`));