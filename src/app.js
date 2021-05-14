
const express = require("express");
const morgan = require("morgan");

// Server
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use('/link-api', require('./routes/linkapi/link-apiRoutes'));

app.get('/panel', async (req, res) => {
    res.sendfile('./src/public/panel.html');
});

app.get('/', async (req, res) => {
    res.sendfile('./src/public/index.html');
});

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

