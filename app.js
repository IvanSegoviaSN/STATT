
const express = require("express");
const mongoose = require('mongoose');
const userRouter = require('./user.route');

const server = express();

const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send("Hello");
});

server.use(express.json());
server.use('/nombre', userRouter);

const uri = "mongodb+srv://brawlUser:wDAM7MeQcEg1SmUL@cluster0.wakn5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
});

