function ColourChanger(x, y) {
	this.x = x;
	this.y = y; 
	this.radius = 18;
	this.n = colours.length;

	this.show = function() {
		for (var i = 0; i < this.n; i++) {
			fill(colours[i][0], colours[i][1], colours[i][2]);
			arc(this.x, this.y, this.radius * 2, this.radius * 2, 
				(TWO_PI / this.n) * i, TWO_PI / this.n * (i + 1));
		}
	}

	this.update = function() {
		if (circle.y < CIRCLE_BOUNDARY) {
			this.y += OBSTACLE_VELOCITY;
		}
	}

	this.offscreen = function() {
		if (this.y - this.radius > height);
	}

	this.intersect = function() {
		var distCentre = dist(this.x, this.y, circle.x, circle.y);
		var sumRadii = this.radius + circle.radius;
		return sumRadii >= distCentre;
	}
}