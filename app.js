const http = require('http')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hellor, World!</h1>')
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
