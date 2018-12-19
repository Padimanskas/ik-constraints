export default class Circle {

    public x: number;
    public y: number;
    public radius: number;
    public color: string;
    public context: CanvasRenderingContext2D;

  constructor(x: number, y: number, radius: number, color: string, context: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.context = context;
  }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.context.closePath();
        if (this.color) {
            this.context.fillStyle = this.color;
            this.context.fill();
        } else {
            this.context.strokeStyle = 'rgba(255,255,255,0.1)';
            this.context.stroke();
        }
    }
}