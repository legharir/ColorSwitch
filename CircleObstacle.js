function CircleObstacle(x, y) {
	this.x = x;
	this.y = y;
	this.outerRadius = 80;
	this.innerRadius = 65;
	this.rotateOffset = 0;
	this.n = colours.length;
	this.rotateOffset = 0;
	this.botColour = [];
	this.topColour = [];

	this.show = function() {
		// Drawing outer circle
		for (var i = 0; i < this.n; i++) {
			var startAngle = (TWO_PI / this.n) * i + this.rotateOffset;
			var endAngle = TWO_PI / this.n * (i + 1) + this.rotateOffset;
			fill(colours[i][0], colours[i][1], colours[i][2]);
			arc(this.x, this.y, this.outerRadius * 2, this.outerRadius * 2, 
				startAngle, endAngle);

			// Calculating bottom and top colours
			if (startAngle % TWO_PI >= 0 && startAngle % TWO_PI <= PI/2) {
				this.botColour = colours[i];
			} else if (startAngle % TWO_PI > PI && startAngle % TWO_PI < 3*PI/2) {
				this.topColour = colours[i];
			}
		} 

		// Drawing inner circle
		fill(32, 32, 32);
		ellipse(this.x, this.y, this.innerRadius * 2, this.innerRadius * 2);
	}

	this.update = function() {
		this.rotateOffset += 0.02;
		if (circle.y < CIRCLE_BOUNDARY) {
			this.y += OBSTACLE_VELOCITY;
		}
	}

	this.offscreen = function() {
		return (this.y - this.outerRadius > height);
	}

	this.intersect = function() {
		var botIntersect = (circle.y - circle.radius <= this.y + this.outerRadius 
							&& circle.y + circle.radius >= this.y + this.innerRadius)
							&& this.botColour != circle.colour;
		var topIntersect = (circle.y - circle.radius <= this.y - this.innerRadius 
							&& circle.y + circle.radius >= this.y - this.outerRadius)
							&& this.topColour != circle.colour;
		return botIntersect || topIntersect;
	}
}