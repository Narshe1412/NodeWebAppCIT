const http = require('http');


const server = http.createServer((req, res) => {
  //res.write('hello world')
  const body = 'hello world body'
  res.setHeader('Content-Length', body.length)
  res.setHeader('Content-Tyoe', 'text/plain')
  res.end(body)
})

server.listen(3000)