function Lluis(height, weight, hair, noise) {
	this.height = height;
	this.weight = weight;
	this.hair = hair;
	this.noise = noise || "brrrr";
};

Lluis.prototype.makeNoise = function() {
	console.log(this.noise + "!!!!");

};

var minilluis = new Lluis(160, 60, "black", "blablablabla");
minilluis.makeNoise();