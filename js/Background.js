function Background(canvas) {
  this.width = canvas.width;
  this.height = canvas.height;

  this.draw = function(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.width, this.height);
	
	// cool line down the middle
    ctx.strokeStyle = "#49fb35";
	ctx.beginPath();
	ctx.moveTo(this.width / 2, 0);
	ctx.lineTo(this.width / 2,this.height);
	ctx.stroke();
  }
}
