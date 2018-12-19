import PointCoordinates from './point.interface';

export default class IKSegment {

    public segmentSize: number;
    public segmentHead: PointCoordinates = {x: 0, y: 0};
    public segmentTail: PointCoordinates = {
        x: this.segmentHead.x + this.segmentSize,
        y: this.segmentHead.y + this.segmentSize
    };

    constructor(private size: number, private head: PointCoordinates, private tail: PointCoordinates) {
        this.segmentSize = size;
        this.segmentHead = head || {x: 0, y: 0};
        this.segmentTail = tail || {
            x: this.segmentHead.x + this.segmentSize,
            y: this.segmentHead.y + this.segmentSize
        };
    }

    update() {
        // Position derivitives
        const dx = this.segmentHead.x - this.segmentTail.x;
        const dy = this.segmentHead.y - this.segmentTail.y;

        const dist = Math.sqrt(dx * dx + dy * dy);
        let force = 0.5 - this.segmentSize / dist * 0.5;
        const strength = 0.995; // No springiness

        force *= 0.99;

        const fx = force * dx;
        const fy = force * dy;

        this.segmentTail.x += fx * strength * 2.0;
        this.segmentTail.y += fy * strength * 2.0;
        this.segmentHead.x -= fx * (1.0 - strength) * 2.0;
        this.segmentHead.y -= fy * (1.0 - strength) * 2.0;
    }
}