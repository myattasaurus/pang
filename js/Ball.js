function Ball() {
  this.x = 100;
  this.y = 100;
  this.dx = 1;
  this.dy = 1;
  this.radius = 4;

  this.draw = function(ctx) {
    ctx.fillStyle = "#49fb35";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fill();
  }

  this.move = function() {
    this.x += this.dx;
    this.y += this.dy;
  }
}
