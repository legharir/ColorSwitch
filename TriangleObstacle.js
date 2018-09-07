function TriangleObstacle(x, y) {
  this.x = x;
  this.y = y;
  this.radius = 50;
  this.c = Math.floor(Math.random() * 3);

  this.show = function() {
    // Getting the this.coordinates of the triangle vertices
    var left = [
      this.x - this.radius * Math.cos(PI / 6),
      this.y - this.radius * Math.sin(PI / 6),
    ];
    var right = [
      this.x + this.radius * Math.cos(PI / 6),
      this.y - this.radius * Math.sin(PI / 6),
    ];
    var top = [this.x, this.y + this.radius];

    // Drawing the bottom line
    stroke(
      colours[this.c % 3][1],
      colours[this.c % 3][2],
      colours[this.c % 3][3],
    );
    line(left[0], left[1], right[0], right[1]);
    this.c++;

    // Drawing the left line
    stroke(
      colours[this.c % 3][1],
      colours[this.c % 3][2],
      colours[this.c % 3][3],
    );
    line(left[0], left[1], top[0], top[1]);
    this.c++;

    // Drawing the right line
    stroke(
      colours[this.c % 3][1],
      colours[this.c % 3][2],
      colours[this.c % 3][3],
    );
    line(right[0], right[1], top[0], top[1]);
    this.c++;
  };

  this.update = function() {
    if (circle.y < CIRCLE_BOUNDARY) {
      this.y += OBSTACLE_VELOCITY;
    }
  };
}
