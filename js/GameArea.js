function GameArea(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.background = new Background(this.canvas);
  this.ball = new Ball();

  // move with 'w' and 's' keys
  this.leftPaddle = new Paddle(this.canvas, 'left', 87, 83);

  // move with up and down keys
  this.rightPaddle = new Paddle(this.canvas, 'right', 38, 40);

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
    this.leftPaddle.move(this.keys);
    this.rightPaddle.move(this.keys);
    this.ball.move();
    this.reverseBall();
  }
  this.draw = function() {
    this.background.draw(this.ctx);
    this.ball.draw(this.ctx);
    this.leftPaddle.draw(this.ctx);
    this.rightPaddle.draw(this.ctx);
  }
}
