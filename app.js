const http = require('http')
const mongoose = require('mongoose');
const userRouter = require('./user.route');

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hellor, World!</h1>')
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
