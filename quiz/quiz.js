var read = require('read');

function Question(question, answer, id) {
	this.question = question
	this.answer = answer
	this.id = id
	// this.user_answer = undefined
};

// Question.prototype.ask = function() {
// 	options = {
//     	prompt: this.question + " ?\n>"
// 	};

// 	function displayName (err, name){
//     	// console.log("Your answer is: " + name + " ...")

//     	if (name === this.answer) {
// 			this.user_answer = true
// 		} else {
// 			this.answer = false
// 		}
// 	};

// 	read(options, displayName);
// };



function Quiz(player, question) {
	this.player = player
	this.question = question
};

Quiz.prototype.play = function() {
	console.log("Hey " + this.player + "!" + " Welcome to the USA quiz!")
	this.question.ask();
	if (this.question.user_answer === true) {
		console.log("Nice!")
	} else {
		console.log("Try again")
	}
}


var q1 = new Question("Which United States President is orange and hates women?", "Donald Trump", 1);
var q2 = new Question("Which incompetent polotician finished runner up against the worst candidate there ever was and will be?", "Hillary Clinton", 2);

var quiz = new Quiz("Alvaro", q1);

quiz.play();





