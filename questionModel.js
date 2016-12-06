var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchem = new Schema ({
		answer: Number,
		date: { type: Date, default: Date.now }
});

var questionSchema = new Schema({
	question: String,
	answers: [answerSchem]
});