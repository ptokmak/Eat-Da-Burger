//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

var PORT = 3000;


// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))


app.listen(PORT, function() {
    console.log("Listening on PORT %d", PORT);
});