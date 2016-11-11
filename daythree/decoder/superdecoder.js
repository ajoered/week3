var decoder = require("./decoder.js");

function super_decoder(string, type, forwards){
	var forwards = forwards || false;
	var words = []

		if (type === "every") {
			words = string.split(" ");
		}

		else if (type === "even") {
			words = string.split(" ").filter(function (word, index) {
	    		return index % 2 === 0;
			});
		}

		else if (type === "odd") {
			words = string.split(" ").filter(function (word, index) {
	    		return index % 2 != 0;
			});
		}

		if (forwards) {
			return decoder(words)

		} else {
			return decoder(words.reverse())
		}

}

var sentence1 = "Attack her nose under here with an itch"
var sentence2 = "Raul Nuñez call never finished"
var sentence3 = "Start rapping this or countless queasy wizards give back jay-z"
var sentence4 = "inner peace is overrated"
var sentence5 = "Fill the proper tank for the cow"

console.log(super_decoder(sentence5, "odd"))
console.log(super_decoder(sentence5, "even"))
console.log(super_decoder(sentence5, "every"))
console.log(super_decoder(sentence5, "odd", "forwards"))
console.log(super_decoder(sentence5, "even", "forwards"))
console.log(super_decoder(sentence5, "every", "forwards"))

console.log(super_decoder(sentence4, "odd"))
console.log(super_decoder(sentence4, "even"))
console.log(super_decoder(sentence4, "every"))
console.log(super_decoder(sentence4, "odd", "forwards"))
console.log(super_decoder(sentence4, "even", "forwards"))
console.log(super_decoder(sentence4, "every", "forwards"))

console.log(super_decoder(sentence3, "odd"))
console.log(super_decoder(sentence3, "even"))
console.log(super_decoder(sentence3, "every"))
console.log(super_decoder(sentence3, "odd", "forwards"))
console.log(super_decoder(sentence3, "even", "forwards"))
console.log(super_decoder(sentence3, "every", "forwards"))

console.log(super_decoder(sentence2, "odd"))
console.log(super_decoder(sentence2, "even"))
console.log(super_decoder(sentence2, "every"))
console.log(super_decoder(sentence2, "odd", "forwards"))
console.log(super_decoder(sentence2, "even", "forwards"))
console.log(super_decoder(sentence2, "every", "forwards"))

console.log(super_decoder(sentence1, "odd"))
console.log(super_decoder(sentence1, "even"))
console.log(super_decoder(sentence1, "every"))
console.log(super_decoder(sentence1, "odd", "forwards"))
console.log(super_decoder(sentence1, "even", "forwards"))
console.log(super_decoder(sentence1, "every", "forwards"))

