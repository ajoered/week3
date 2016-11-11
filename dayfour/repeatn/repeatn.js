var fs = require('fs')

function repeatNumbers(error, string) {
	if (error) {
		console.log('Error!:  ' + error)
	} else {
	
	var array = string.split(",")
	var result = array.filter(function(elem, index, self) {
    	return index == self.indexOf(elem);
		})
	}
	console.log(result)
}

fs.readFile('repeatn.txt', 'utf-8', repeatNumbers);