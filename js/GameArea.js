function GameArea(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.background = new Background(this.canvas);
  this.ball = new Ball();

  this.reverseBall = function() {
    if (this.ball.x + this.ball.radius > this.canvas.width ||
        this.ball.x - this.ball.radius < 0) {
      this.ball.dx = -this.ball.dx;
    }
    if (this.ball.y + this.ball.radius > this.canvas.height ||
        this.ball.y - this.ball.radius < 0) {
      this.ball.dy = -this.ball.dy;
    }
  }

  this.move = function() {
    this.ball.move();
    this.reverseBall();
  }
  this.draw = function() {
    this.background.draw(this.ctx);
    this.ball.draw(this.ctx);
  }
}
