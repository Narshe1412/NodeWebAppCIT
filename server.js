const http = require('http');


const server = http.createServer((req, res) => {
  const url = 'http://google.com'
  const body = '<p>Redirecting to <a href="' + url + '">' + url + '</a></p>'

  res.setHeader('Location', url)
  res.setHeader('Content-Length', body.length)
  res.setHeader('Content-Tyoe', 'text/html')
  res.statusCode = 302;
  res.end(body)
})

server.listen(3000)