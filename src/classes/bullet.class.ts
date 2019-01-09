import renderer from '../utils/renderer'
import PointCoordinates from '../interfaces/point.interface';

export default class Bullet {

    private sprite: any;
    private explosion: any;

    constructor(public x: number, public y: number, public speed: number, public angle: number) {
        this.sprite = renderer.createSprite('assets/bullet-1.png');
        this.explosion = renderer.createAnimatedSprite([
            'assets/explosion-1.png',
            'assets/explosion-2.png',
            'assets/explosion-3.png',
            'assets/explosion-4.png',
            'assets/explosion-5.png',
            'assets/explosion-6.png'
        ]);
    }

    update(): void {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        this.sprite.setPosition(<PointCoordinates>{x: this.x, y: this.y});
    }

    getPosition(): PointCoordinates {
        const {x, y} = this;
        return <PointCoordinates>{x, y};
    }

    removeSprite(): void {
        this.sprite.remove();
        this.explosion.setPosition(this.getPosition());
        this.explosion.playOnce(0.2);

    }

}