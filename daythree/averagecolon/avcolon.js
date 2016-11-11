var numbers = '80:70&90:100';

function averageColon(string) {
	var number_string = string.split(/[:&]/);
	var sum = number_string.reduce(function(a, b) {return parseInt(a) + parseInt(b);});
	var avg = sum / number_string.length;
	return avg
	
	// var sum = 0;
	// for ( var i = 0; i < number_string.length; i++) {
 	// sum += parseInt(number_string[i]);
	// }
}

console.log( averageColon(numbers) === 85 );

