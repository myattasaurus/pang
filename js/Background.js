function Background(canvas) {
  this.width = canvas.width;
  this.height = canvas.height;

  this.draw = function(ctx) {
    ctx.fillStyle = "#FFFFFF";
    ctx.clearRect(0, 0, this.width, this.height);
  }
}
