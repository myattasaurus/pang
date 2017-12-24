var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;

function Paddle(canvas, leftOrRight, upKey, downKey) {
  this.top = 0;
  this.height = 80;
  this.width = 5;
  this.speed = 0;

  this.upKey = upKey;
  this.downKey = downKey;

  this.TOP_LIMIT = 0;
  this.BOTTOM_LIMIT = canvas.height;

  if (leftOrRight == 'left') {
    this.left = 0;
  } else {
    this.left = canvas.width - this.width;
  }

  this.move = function(keys) {
    if (keys && keys[this.upKey] && keys[this.downKey]) {
      this.speed = 0;
    } else if (keys && keys[this.upKey]) {
      this.speed = -2;
    } else if (keys && keys[this.downKey]) {
      this.speed = 2;
    } else {
      this.speed = 0;
    }
    this.top += this.speed;
    if (this.top < this.TOP_LIMIT) {
      this.top = this.TOP_LIMIT;
    }
    if (this.top + this.height > this.BOTTOM_LIMIT) {
      this.top = this.BOTTOM_LIMIT - this.height;
    }
  }

  this.draw = function(ctx) {
    ctx.fillRect(this.left, this.top, this.width, this.height)
  }
}
