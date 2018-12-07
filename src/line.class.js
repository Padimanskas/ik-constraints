export default class Line {

  constructor(x1, y1, x2, y2, context = ctx) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.context = context;
  }

  draw() {
    this.context.moveTo(this.x1, this.y1);
    this.context.lineTo(this.x2, this.y2);
    this.context.strokeStyle = 'rgba(255,255,255,0.5)';
    this.context.stroke();
  }
}