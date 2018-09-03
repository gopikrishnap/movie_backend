let config = require('./config');
let mongoose = require('mongoose');
let express = require('express');
let routes = require('./routes/routes');
let bodyParser = require('body-parser');
let app = express();


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


 mongoose.connect(config.db.uri).then(
    (response) => { console.log("successfully Connected to DB"); }
).catch(
   (err) => {
       console.log("error",err)
   }
);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'x-access-token,authorization,Content-Type,Access-Control-Request-Headers,enctype');

    // Set to true if you need the website to include cookies in  requests
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
        res.status(200);
        res.end();
    }
    else {
        // Pass to next layer of middleware
        next();
    }
});

app.use( '/api' , routes )

app.listen(config.port);

module.exports = app;
