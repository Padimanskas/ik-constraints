import {Application as PixiApp, Sprite as PixiSpr} from 'pixi';
import Circle from './circle.class';
import Line from './line.class';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

export default class Renderer {
  constructor(line = Line, circle = Circle, context = ctx) {
    this.context = ctx;
    this.line = line;
    this.circle = circle;
  }

  drawCircle(x, y, r) {
    const Circle = this.circle;
    new Circle(x, y, r, null, this.context).draw();
  }

  drawLine(x1, y1, x2, y2) {
    const Line = this.line;
    new Line(x1, y1, x2, y2, this.context).draw();
  }

  clearCanvas(context) {
    this.context.clearRect(0, 0, 1000, 1000);
  }
}