import IKSegment from './segment.class';
import PointCoordinates from '../interfaces/point.interface';
import renderer from '../utils/renderer';

export default class IKChain {

    public size: number;
    public interval: number;
    public links: Array<IKSegment>;
    public IKSegment: any;
    private app: any;

    constructor(size: number, interval: number, IKSeg = IKSegment) {
        this.size = size;
        this.interval = interval;
        this.links = [];
        this.IKSegment = IKSeg;
        this.app = renderer.getApp();
    }

    update(target: PointCoordinates): void {

        let link = this.links[0];
        let baseLink = this.links[this.links.length - 1];

        link.segmentHead.x = target.x;
        link.segmentHead.y = target.y;

        for (let i = 0, n = this.links.length; i < n; ++i) {
            link = this.links[i];
            link.update();
        }

        baseLink.segmentTail.x = this.app.screen.width / 2;
        baseLink.segmentTail.y = this.app.screen.height / 1.3;

    }

    generate(): void {
        let point = <PointCoordinates>{x: 0, y: 0},
            IKSegment = this.IKSegment,
            link = null;

        for (let i = 0, n = this.size; i < n; ++i) {
            if(i === 0) {
                this.links.push(new IKSegment('spear', this.interval, point));
            } else {
                this.links.push(new IKSegment('', this.interval, point));
            }

            link = this.links[i];
            link.segmentHead.x = Math.random() * 500;
            link.segmentHead.y = Math.random() * 500;
            link.segmentTail.x = Math.random() * 500;
            link.segmentTail.y = Math.random() * 500;
            point = this.links[i].segmentTail;
        }

    }
}