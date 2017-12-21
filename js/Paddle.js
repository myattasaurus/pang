function Paddle() {
  this.top = 0;
  this.height = 80;
  this.width = 5;

  this.draw = function(ctx) {
    ctx.fillRect(0, this.top, this.width, this.top + this.height)
  }
}
