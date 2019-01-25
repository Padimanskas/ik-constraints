import renderer from '../../utils/renderer';
import PointCoordinates from '../../interfaces/point.interface';

export default class HomingMissile {

    private rotation = 0;
    private speed = 20;
    private turn = 10;

    private missileSprite = renderer.createSprite('assets/missile.png');

    constructor(public x = 0, public y = 0, private targetX = 0, private targetY = 0) {}

    update() {
        let angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
        let turn = this.turn * Math.PI / 180;
        let delta = angle - this.rotation;

        if (delta > Math.PI) {
            delta -= Math.PI * 2;
        }

        if (delta < -Math.PI) {
            delta += Math.PI * 2;
        }

        this.rotation += delta > 0 ? turn : -turn;

        if (Math.abs(delta) < turn) {
            this.rotation = angle;
        }

        this.x += Math.cos(this.rotation) * this.speed;
        this.y += Math.sin(this.rotation) * this.speed;

        this.missileSprite.setPosition({x: this.x, y: this.y});
        this.missileSprite.rotateAt(this.rotation);

    }

    isTargetAchieved() {
        const diffX = this.targetX - this.x;
        const diffY = this.targetY - this.y;
        return Math.sqrt(diffX * diffX + diffY * diffY) < 10;
    }

    removeSprite() {
        this.missileSprite = null;
    }

}
