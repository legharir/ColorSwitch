var circle;
var colourChangers = [];
var obstacles = [];
function setup() {
	// Creating canvas and initializing variables
	createCanvas(400, 600);
	circle = new Circle();
	for (var i = 0; i < 20; i++) {
		colourChangers.push(new ColourChanger(width / 2, height * (1 - 2 * i) / 4));		
		obstacles.push(new CircleObstacle(width / 2, height * (1 - i) / 2));
	} 	
}

function draw() {
	console.log(obstacles.length);
	background(32, 32, 32);

	// Update each colour changer and check for intersection
	for (var i = 0; i < colourChangers.length; i++) {
		obstacles[i].show();
		obstacles[i].update();
		colourChangers[i].show();
		colourChangers[i].update();

		// Get rid of the obstacle if offscreen
		if (obstacles[i].offscreen()) {
			obstacles.splice(i, 1);
		} 

		// Check for intersection with circle
		if (obstacles[i].intersect()) {
			this.gameOver();
		} else if (colourChangers[i].intersect()) {
			colourChangers.splice(i, 1);
			circle.changeColour();
		} 
	}

	circle.show();
	circle.update();

}

function keyPressed() {
	if (key == ' ') {
		circle.up();
	}
}

function gameOver() {
	background()
}