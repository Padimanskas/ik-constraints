import Entity from '../interfaces/entity.interface';
import renderer from '../renderer';
import SpriteInterface from '../interfaces/sprite.interface';
import PointCoordinates from '../interfaces/point.interface';

export default class Spindle implements Entity {

    public spindle: SpriteInterface;

    constructor(private sprImagePath: string) {
        this.spindle = renderer.createSprite(sprImagePath);
    }

    setPosition(point: PointCoordinates): void {
        this.spindle.setPosition(point);
    }

    getPosition(): PointCoordinates {
        return this.spindle.getPosition();
    }
}