var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/questions'); 

var Question = require("./questionModel");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // To understand "why?"	

app.use(express.static('Public'));
app.use(express.static('node_modules'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get('/questions', function(req, res) {
	Question.find(function(error, questions) {
		res.send(questions);
	});
});

app.listen(8006);