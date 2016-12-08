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

// app.get('/', function(req,res) {
// 	res.send("You are inside the fullstack project")
// });

// app.get('/questions', function (req, res) {
//   res.json({beers: [
//     { name: '512 IPA', style: 'IPA', image_url: 'http://bit.ly/1XtmB4d', abv: 5 },
//     { name: '512 Pecan Porter', style: 'Porter', image_url: 'http://bit.ly/1Vk5xj4', abv: 4 }
//   ]});
// });

app.get('/questions', function(req, res) {
	Question.find(function(error, questions) {
		res.send(questions);
	});
});

app.post('/questions', function(req, res, next){
	var question = new Question(req.body);

	question.save(function(err, question) {
  		if (err) { return next(err); }

  		res.json(question);

  })
});

app.put('/questions/:_id', function(req, res, next){
	
	Question.update({_id: req.params._id}, {$push: {"answers": req.body}}, function(error, question){

  				res.json(question);

  		
	});
});


app.delete('/questions/:id', function(req, res) {
    console.log(req.params.id);
    Question.findByIdAndRemove(req.params.id, function(err, data) {
        if(err) {
            console.log(err);
            return next(err);
        }
        res.send(data);
    });
});


app.listen(8006);