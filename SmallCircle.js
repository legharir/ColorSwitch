function SmallCircle(x, y) {
	this.colour = colours[(Math.floor(Math.random() * colours.length))];
	this.radius = 5;
	this.x = x;
	this.y = y;
	this.angle = Math.random() * TWO_PI;
	this.xVelocity = Math.cos(this.angle) * Math.random() * 14;
	this.yVelocity = Math.sin(this.angle) * Math.random() * 14;
	this.gravity = 0.2;

	this.show = function() {
		fill(this.colour[0], this.colour[1], this.colour[2]);
		ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
	}

	this.update = function() {
		this.yVelocity += this.gravity;
		this.y += this.yVelocity;
		this.x += this.xVelocity

		// If ball hits left or right, bounce off
		if (this.x + this.radius >= width || this.x - this.radius <= 0) {
			this.xVelocity *= -1;
		} 
	}

	this.offscreen = function() {
		return this.y - this.radius > height; 
	}
}