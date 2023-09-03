// server.js
const http = require('http')
const fs = require('fs')
http.createServer(function(__req, __res){
    fs.createReadStream('./test.mp4').pipe(__res)
}).listen(3000,function(){
    console.log('server is running at http://localhost:3000')
})
