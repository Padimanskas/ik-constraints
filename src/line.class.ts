export default class Line {

    public x1: number;
    public y1: number;
    public x2: number
    public y2: number;
    public context: CanvasRenderingContext2D;

    constructor(x1: number, y1: number, x2: number, y2: number, context: CanvasRenderingContext2D) {
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