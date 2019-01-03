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
        this.links = [];
        this.IKSegment = IKSeg;
    }

    update(target: PointCoordinates): void {

        let link = this.links[0];

        let baseLink = this.links[this.links.length-1];


        //let dx = target.x - 100;
        //let dy = target.y - 100;
        //let dist = Math.sqrt(dx * dx + dy * dy);

        //if(dist < 32 * 5) {
            link.segmentHead.x = target.x;
            link.segmentHead.y = target.y;
        //}




        for (let i = 0, n = this.links.length; i < n; ++i) {

            link = this.links[i];

            //if(i > 0) {
                link.update();
              // continue;
            //}

            //link.segmentHead.x = 100;
            //link.segmentHead.y = 100;


        }

        //baseLink.segmentTail.x = 100;
        //baseLink.segmentTail.y = 100;



    }

    generate(): void {
        let point = <PointCoordinates>{x: 0, y: 0},
            IKSegment = this.IKSegment,
            link = null;

        for (let i = 0, n = this.size; i < n; ++i) {
            this.links.push( new IKSegment(this.interval, point) );
            link = this.links[i];
            link.segmentHead.x = Math.random() * 500;
            link.segmentHead.y = Math.random() * 500;
            link.segmentTail.x = Math.random() * 500;
            link.segmentTail.y = Math.random() * 500;
            point = this.links[i].segmentTail;
        }

    }
}