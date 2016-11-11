var example = [ 2, -5, 10, 5, 4, -10, 0]

function process(data){
	var positions = [];
	data.forEach (function (a, i) {
		data.forEach (function (b, j) {
			if 	(j <= i && a + b === 0) {positions.push ( i + "," + j)}
		});
	});
	positions.forEach (function (a) {
		console.log("Adding these positions gives you 0: " + a)
		
	})

}

var results = process(example);
