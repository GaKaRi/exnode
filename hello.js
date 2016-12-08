const http = require('http');//http 모듈 사용

const hostname = '127.0.0.1';
const port = 3000;


//위를 다시 써보면
var server = http.createServer(function(request, response){
  response.statusCode = 200;//접속 성공시
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World\n');
});
server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
