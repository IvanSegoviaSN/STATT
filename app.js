const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hellor, World!</h1>')
})

const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./user.route');

const app = express();

app.use(express.json());
app.use('/user', userRouter);

const uri = "mongodb+srv://test:123@cluster0-vnelr.gcp.mongodb.net/test?retryWrites=true;"

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
