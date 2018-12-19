import {Application} from 'pixi.js';
import Circle from './circle.class';
import Line from './line.class';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = canvas.getContext('2d');

export default class Renderer {

    private context: CanvasRenderingContext2D;
    private line: any;
    private circle: any;

    constructor(line = Line, circle = Circle, context = ctx) {
        this.context = ctx;
        this.line = line;
        this.circle = circle;
    }

    drawCircle(x: number, y: number, r: number) {
        const Circle = this.circle;
        new Circle(x, y, r, null, this.context).draw();
    }

    drawLine(x1: number, y1: number, x2: number, y2: number) {
        const Line = this.line;
        new Line(x1, y1, x2, y2, this.context).draw();
    }

    clearCanvas() {
        this.context.clearRect(0, 0, 1000, 1000);
    }
}