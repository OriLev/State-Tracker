var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchem = new Schema ({
		answer: Number,
		date: { type: Date, default: Date.now },
		comments: {type: [String], default: []}
});

var questionSchema = new Schema({
	question: String,
	startTime: {type: Date, default: Date.now},
	endTime: {type: Date, default: null},
	askingTimes: [Number],
	answers: {type: [answerSchem], default: []}
	// answers: {type: Array, default: []}
});

var Question = mongoose.model("Question", questionSchema);
// var Answer = mongoose.model("Answer", answerSchem);
module.exports = Question;
// module.exports = Answer;