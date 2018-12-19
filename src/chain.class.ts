import Renderer from './renderer.class';
import IKSegment from './segment.class';
import PointCoordinates from './point.interface';

export default class IKChain {

    public size: number;
    public interval: number;
    public links: Array<IKSegment>;
    public IKSegment: any;
    public renderer: Renderer;

    constructor(size: number, interval: number, IKSeg = IKSegment, renderer = Renderer) {
        this.size = size;
        this.interval = interval;
        this.links = new Array(size);
        this.IKSegment = IKSeg;
        this.renderer = new renderer();

    }

    update(target: PointCoordinates) {

        let link = this.links[0];

        link.segmentHead.x = target.x;
        link.segmentHead.y = target.y;

        for (let i = 0, n = this.links.length; i < n; ++i) {
            link = this.links[i];
            link.update();
        }
    }

    generate() {
        let point = {x: 0, y: 0},
            IKSegment = this.IKSegment,
            link = null;

        for (let i = 0, n = this.links.length; i < n; ++i) {
            link = this.links[i] = new IKSegment(this.interval, point);
            link.segmentHead.x = Math.random() * 500;
            link.segmentHead.y = Math.random() * 500;
            link.segmentTail.x = Math.random() * 500;
            link.segmentTail.y = Math.random() * 500;
            point = link.segmentTail;
        }
    }

    draw() {
        let link = null, p1 = null, p2 = null;
        this.renderer.clearCanvas();
        for (let i = 0, n = this.links.length; i < n; ++i) {
            link = this.links[i];
            p1 = link.segmentHead;
            p2 = link.segmentTail;
            this.renderer.drawCircle(p1.x, p1.y, 10);
            this.renderer.drawCircle(p2.x, p2.y, 10);
            this.renderer.drawLine(p1.x, p1.y, p2.x, p2.y);
        }
    }
}