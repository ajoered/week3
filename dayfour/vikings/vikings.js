function Viking(name, health, maxstrength, warcry) {
	this.name = name;
	this.health = health || 100;
	this.maxstrength = maxstrength || 20;
	this.warcry = warcry || "AUUUUUUUU!!!!!";
};

Viking.prototype.warCry = function() {
	console.log(this.name + " says: " + this.warcry);

};

Viking.prototype.hit = function(enemy) {
	var random_strength = Math.floor((this.maxstrength * 0.5 ) + Math.random() * 11)
	enemy.health = enemy.health - random_strength
	console.log(this.name + " inflicted " + random_strength + " points of damage on poor " + enemy.name + ". His health is now: " + enemy.health);
};



function Pit(fighters_array, maxturns) {
	this.fighters_array = fighters_array
	this.maxturns = 5
};

Pit.prototype.fight = function () {
	var fighter1 = this.fighters_array[Math.floor(Math.random() * this.fighters_array.length) ]
	var fighter2 = this.fighters_array[Math.floor(Math.random() * this.fighters_array.length) ]
	while (fighter1 == fighter2) {
		var fighter2 = this.fighters_array[Math.floor(Math.random() * this.fighters_array.length) + 0]
	};

	fighter1.warCry()
	fighter2.warCry()

	console.log("Welcome to the fighting pit... " + '\n' + fighter1.name + " will now fight " + fighter2.name + "!")
	
	var turn = 0
	while (turn <= this.maxturns) {
		if (fighter1.health < 21 && fighter2.health < 21) {
			break
		} else {
			fighter1.hit(fighter2)
			fighter2.hit(fighter1)
			turn++;
		};
	};

	if (fighter1.health > fighter2.health) {
	console.log("What a fight!!" + fighter1.name + " was the clear winner!!")
	} else if (fighter2.health > fighter1.health) {
	console.log("What a fight!! " + fighter2.name + " was the clear winner!!")
	}
};


var simonyrr = new Viking("Symonyrr");
var filipald = new Viking("Filipald");
var marianhor = new Viking("Marianhor");
var serghen = new Viking("Serghen");
var alvarr = new Viking("Alvarr");
var figthers = [simonyrr, filipald, marianhor, serghen, alvarr]

var pit = new Pit(figthers)
pit.fight()


