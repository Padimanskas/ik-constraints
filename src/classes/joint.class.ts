import Entity from '../interfaces/entity.interface';
import renderer from '../renderer';
import SpriteInterface from '../interfaces/sprite.interface';
import PointCoordinates from '../interfaces/point.interface';

export default class Joint implements Entity {

    public joint: SpriteInterface;

    constructor(private sprImagePath: string) {
        this.joint = renderer.createSprite(sprImagePath);
    }

    setPosition(point: PointCoordinates): void {
        this.joint.setPosition(point);
    }

    getPosition(): PointCoordinates {
        return this.joint.getPosition();
    }
}