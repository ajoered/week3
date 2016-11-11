var words, words2, message;

words = ["dead", "byegone", "landing", "cheaply", "assumed", "incorrectly", "attention", "agent"]
words2 = ["January", "lacks", "caveats", "hazardous", "DOORS", "crying", "arrogantly", "climate", "proponent", "rebuttal"]

function decoder(array){
	var index = 0;
	var secret_message = "";

	for (var i = 0; i < array.length; i++) {
		secret_message += array[i][index]
		index = (index + 1) % 5;
	}
	return secret_message
}

module.exports = decoder;
