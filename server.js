const http = require('node:http')

const server = http.createServer(function (req, res) {

  if (req.url === '/getsecretaData') {
    res.end('there is no secret data')
  }
  res.end('Hello world')
})

server.listen(7777)