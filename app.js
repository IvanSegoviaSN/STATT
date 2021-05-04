
const express = require("express");

const server = express();

const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send("Hello");
});


server.listen(port, () => {
    console.log(`Server running at port ${port}`)
});

