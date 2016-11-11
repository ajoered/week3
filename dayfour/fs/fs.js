var fs = require('fs')

function print (error, content) {
	if (error) {
		console.log('Error!:  ' + error)
	} else {
		console.log("Success!: This is what's in your file: " + content);
	}
}

fs.readFile('file.txt', 'utf-8', print);
fs.readFile('file2.txt', 'utf-8', print);