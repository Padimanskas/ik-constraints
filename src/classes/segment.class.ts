import PointCoordinates from '../interfaces/point.interface';
import render from '../utils/renderer';
import Utils from '../utils/utils';

export default class IKSegment {

    public segmentSize: number;
    public segmentHead: PointCoordinates = {x: 0, y: 0};
    public segmentTail: PointCoordinates = {
        x: this.segmentHead.x + this.segmentSize,
        y: this.segmentHead.y + this.segmentSize
    };
    private spindle;
    private jointHead;
    private jointTail;
    private headCaption;
    private tailCaption;

    constructor(private size: number, private head: PointCoordinates, private tail: PointCoordinates, private utils = Utils) {
        this.segmentSize = size;
        this.segmentHead = head || {x: 0, y: 0};
        this.segmentTail = tail || {
            x: this.segmentHead.x + this.segmentSize,
            y: this.segmentHead.y + this.segmentSize
        };

        this.spindle = render.createAnimatedSprite(['assets/line0.png', 'assets/line1.png', 'assets/line2.png']);
        this.jointHead = render.createSprite('assets/circle.png');
        this.jointTail = render.createSprite('assets/circle.png');
        //this.headCaption = render.createText('');
        //this.tailCaption = render.createText('');
        this.spindle.play(0.2);

    }

    update(): void {
        const dx = this.segmentHead.x - this.segmentTail.x;
        const dy = this.segmentHead.y - this.segmentTail.y;

        const dist = Math.sqrt(dx * dx + dy * dy);
        let force = 0.5 - this.segmentSize / dist * 0.5;
        const strength = 1;

        force *= 1;

        const fx = force * dx;
        const fy = force * dy;

        this.segmentTail.x += fx * strength * 2.0;
        this.segmentTail.y += fy * strength * 2.0;
        this.segmentHead.x -= fx * (1.0 - strength) * 2.0;
        this.segmentHead.y -= fy * (1.0 - strength) * 2.0;



        this.jointHead.setPosition(this.segmentHead);
        this.jointTail.setPosition(this.segmentTail);

        let angle = this.utils.getAngleBetweenPoints(this.segmentHead, this.segmentTail);
        let center = this.utils.getCenterBetweenPoints(this.segmentHead, this.segmentTail);
        this.spindle.setPosition(center);
        this.spindle.rotateAt(angle);


        /*

        this.headCaption.setPosition(<PointCoordinates>{x: this.segmentTail.x, y: this.segmentTail.y});

        this.spindle.getAngle().then(angle => {
            this.headCaption.setText(`angle: ${angle}`);
        });

        */

        //this.tailCaption.setPosition(<PointCoordinates>{x:this.segmentTail.x, y:this.segmentTail.y});
        //this.tailCaption.setText(`tail x: ${Math.round(this.segmentTail.x)}, tail y: ${Math.round(this.segmentTail.y)}`);

    }

}