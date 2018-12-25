import IKSegment from './segment.class';
import PointCoordinates from '../interfaces/point.interface';

export default class IKChain {

    public size: number;
    public interval: number;
    public links: Array<IKSegment>;
    public IKSegment: any;

    constructor(size: number, interval: number, IKSeg = IKSegment) {
        this.size = size;
        this.interval = interval;
        this.links = new Array(size);
        this.IKSegment = IKSeg;
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
}