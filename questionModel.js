var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchem = new Schema ({
		answer: Number,
		date: { type: Date, default: Date.now }
});

var questionSchema = new Schema({
	question: String,
	startTime: {type: Date, default: Date.now},
	endTime: {type: Date, default: null},
	askingTimes: [Number],
	answers: [answerSchem]
});

var Question = mongoose.model("Question", questionSchema);
module.exports = Question;