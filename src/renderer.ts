import {Application, Sprite} from 'pixi.js';
import PointCoordinates from './interfaces/point.interface';
import SpriteInterface from './interfaces/sprite.interface';
import ObjectToUpdate from './interfaces/obj-to-update.interface';



const viewportWidth = 800;
const viewportHeight = 600;
const backgroundColor = 0x1099bb;

const app = new Application(viewportWidth, viewportHeight, {backgroundColor : backgroundColor});
const objectsToUpdate = [];
document.body.appendChild(app.view);

app.ticker.add(function(delta) {
    objectsToUpdate.forEach(({obj, coords}) => obj.update(coords));
});

const Renderer = {
    createSprite(sprImagePath: string): SpriteInterface {
        const sprite = Sprite.fromImage(sprImagePath);
        sprite.anchor.set(0.5);
        app.stage.addChild(sprite);
        return {
            getPosition: (): PointCoordinates  => {
                const {x, y} = sprite;
                return <PointCoordinates>{x, y};
            },
            setPosition: (coords: PointCoordinates): void => {
                const {x, y} = coords;
                sprite.x = x;
                sprite.y = y;
            },
            rotateAt: (angle: number): void => {
                sprite.rotation = angle;
            }
        };
    },
    pushToUpdate(obj: ObjectToUpdate, coords?: PointCoordinates): void {
        objectsToUpdate.push({obj, coords});
    }
};

export default Renderer;