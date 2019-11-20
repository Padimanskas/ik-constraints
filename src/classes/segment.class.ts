import PointCoordinates from '@interfaces/point.interface';
import render from '@utils/renderer';
import Utils from '@utils/utils';

export class IKSegment {

    public segmentSize: number;
    public segmentHead: PointCoordinates = {x: 0, y: 0};
    public segmentTail: PointCoordinates = {
        x: this.segmentHead.x + this.segmentSize,
        y: this.segmentHead.y + this.segmentSize
    };
    private spindle;
    private jointHead;
    private jointTail;

    constructor(private type: string, private size: number, private head: PointCoordinates, private tail: PointCoordinates, private utils = Utils) {
        this.segmentSize = size;
        this.segmentHead = head || {x: 0, y: 0};
        this.segmentTail = tail || {
            x: this.segmentHead.x + this.segmentSize,
            y: this.segmentHead.y + this.segmentSize
        };

        if(this.type === 'spear') {
            this.jointHead = render.createSprite('');
            this.jointTail = render.createSprite('assets/spear.png');
            this.spindle = render.createSprite('');
            this.jointTail.setAnchor(0.2, 0.5);
        } else {
            this.spindle = render.createAnimatedSprite(['assets/line0.png', 'assets/line1.png', 'assets/line2.png']);
            this.spindle.play(0.2);
            //this.jointHead = render.createSprite('assets/circle.png');
            this.jointTail = render.createSprite('assets/circle.png');
        }
    }

    updateSprites(): void {
        //this.jointHead.setPosition(this.segmentHead);
        this.jointTail.setPosition(this.segmentTail);
        let angle = this.utils.getAngleBetweenPoints(this.segmentHead, this.segmentTail);
        let center = this.utils.getCenterBetweenPoints(this.segmentHead, this.segmentTail);
        //center.x = this.segmentTail.x;
        //center.y = this.segmentTail.y;
        this.spindle.setPosition(center);
        this.spindle.rotateAt(angle);
        this.jointTail.rotateAt(angle);
    }

    update(): void {
        const dx = this.segmentHead.x - this.segmentTail.x;
        const dy = this.segmentHead.y - this.segmentTail.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let force = 0.5 - this.segmentSize / dist * 0.5;
        const strength = 0.6;
        force *= 0.8;
        const fx = force * dx;
        const fy = force * dy;
        this.segmentTail.x += fx * strength * 2.0;
        this.segmentTail.y += fy * strength * 2.0;
        this.segmentHead.x -= fx * (1.0 - strength) * 2.0;
        this.segmentHead.y -= fy * (1.0 - strength) * 2.0;
        this.updateSprites();
    }
}