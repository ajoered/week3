function caesarCipher (message) {
shift = -3
var num_array = message.split("").map(function(letter) {
	if (letter < 122 && letter > 65) {
		return letter.charCodeAt(0) + shift}
	else
		return letter.charCodeAt(0)
});

final_array = num_array.map(function(num) {
	return String.fromCharCode(num)
});

return final_array
}

console.log(caesarCipher("brutus?"));
