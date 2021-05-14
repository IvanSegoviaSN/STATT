
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Server
const app = express();

// MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://brawlUser:wDAM7MeQcEg1SmUL@cluster0.wakn5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(db => console.info("MongoDB: Conectado."))
    .catch(err => console.error("MongoDB: No se ha podido conectar."));

// Settings
app.set('port', process.env.PORT || 3001);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use('/api/games', require('./routes/app'));

// Static files
app.use(express.static(__dirname + '/public'));

// 404 Page
app.use(function(req,res){
    res.status(404).sendFile('public/404.html', {root: __dirname });
});

// Server listening
app.listen(app.get('port'), () => {
    console.log(`Server running at port ${app.get('port')}`)
});

