import Renderer from './renderer.class';
import IKSegment from './segment.class';

export default class IKChain {

  constructor(size, interval, IKSeg = IKSegment, renderer = Renderer) {
    this.size = size;
    this.interval = interval;
    this.links = new Array(size);
    this.IKSegment = IKSeg;
    this.renderer = new renderer();

  }

  update(target) {

    let link = this.links[0];

    link.head.x = target.x;
    link.head.y = target.y;

    for (let i = 0, n = this.links.length; i < n; ++i) {
      link = this.links[i];
      link.update();
    }
  }

  generate() {
    let point = {x: 0,y: 0},
      IKSegment = this.IKSegment,
      link = null;

    for (let i = 0, n = this.links.length; i < n; ++i) {
      link = this.links[i] = new IKSegment(this.interval, point);
      link.head.x = Math.random() * 500;
      link.head.y = Math.random() * 500;
      link.tail.x = Math.random() * 500;
      link.tail.y = Math.random() * 500;
      point = link.tail;
    }
  }

  draw() {
    let link = null, p1 = null, p2 = null;
    this.renderer.clearCanvas();
    for (let i = 0, n = this.links.length; i < n; ++i) {
      link = this.links[i];
      p1 = link.head;
      p2 = link.tail;
      this.renderer.drawCircle(p1.x, p1.y, 10);
      this.renderer.drawCircle(p2.x, p2.y, 10);
      this.renderer.drawLine(p1.x, p1.y, p2.x, p2.y);
    }
  }
}