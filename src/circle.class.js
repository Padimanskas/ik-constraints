export default class Circle {

  constructor(x, y, r, c, context = ctx) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
    this.context = context;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    this.context.closePath();
    if (this.c) {
      this.context.fillStyle = this.c;
      this.context.fill();
    } else {
      this.context.strokeStyle = 'rgba(255,255,255,0.1)';
      this.context.stroke();
    }
  }
}