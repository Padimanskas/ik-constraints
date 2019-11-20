import { IKSegment as IKSeg } from '@classes/segment.class';
import PointCoordinates from '@interfaces/point.interface';
import renderer from '@utils/renderer';
import utils from '@utils/utils';
import particleSettings from '@particles/emitter-settings';
import smokeParticleSettings from '@particles/smoke-settings';
import Bullets from '@classes/bullets.class';

export default class IKChain {

    public links: Array<IKSeg>;
    private app: any;
    private emitter: any;
    private smokeEmitter: any;
    public baseLink: any;
    public headLink: any;
    private bullets = new Bullets();

    constructor(public size: number, public interval: number, public IKSegment: any = IKSeg) {
        this.size = size;
        this.interval = interval;
        this.links = [];

        this.app = renderer.getApp();
        this.emitter = renderer.createParticleEmitter([
            'assets/particle-1.png',
            'assets/particle-2.png',
            'assets/particle-3.png'], particleSettings);




        this.smokeEmitter = renderer.createParticleEmitter(['assets/smoke-particle.png'], smokeParticleSettings);

        this.generate();
        this.baseLink = this.links[this.links.length - 1];
        this.headLink = this.links[0];
    }

    update(target: PointCoordinates): void {

        let link = this.headLink;
        let baseLink = this.baseLink;

        link.segmentHead.x = target.x;
        link.segmentHead.y = target.y;

        this.emitter.updatePosition(utils.getCenterBetweenPoints(link.segmentHead, link.segmentTail));
        this.smokeEmitter.updateSpawnPos(link.segmentHead);

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

    public shoot(): void {
        const link = this.headLink;
        const angle = utils.getAngleBetweenPoints(link.segmentHead, link.segmentTail);
        this.bullets.createBullet(link.segmentHead.x, link.segmentHead.y, 20, angle);
        this.smokeEmitter.on();
    }

    public prepareToShoot(): void {
        this.emitter.on();
    }

    public disablePreparing(): void {
        this.emitter.off();

    }

}