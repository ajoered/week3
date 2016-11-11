var fs = require('fs')

function averageColon(error, string) {
	if (error) {
		console.log('Error!:  ' + error)
	} else {
	var number_string = string.split(/[:&]/);
	var sum = number_string.reduce(function(a, b) {return parseInt(a) + parseInt(b);});
	var avg = sum / number_string.length;
	console.log(avg)
	}
	
	// var sum = 0;
	// for ( var i = 0; i < number_string.length; i++) {
 	// sum += parseInt(number_string[i]);
	// }
}

fs.readFile('average.txt', 'utf-8', averageColon);

