import render from '../utils/renderer'
import PointCoordinates from '../interfaces/point.interface';

export default class Bullet {

    private sprite: any;

    constructor(public x: number, public y: number, public speed: number, public angle: number) {
        this.sprite = render.createSprite('assets/bullet-1.png');
    }

    update(): void {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        this.sprite.setPosition(<PointCoordinates>{x: this.x, y: this.y});
    }

}