import {Application, Sprite, Text, Texture, extras, loader} from 'pixi.js';
import PointCoordinates from '../interfaces/point.interface';
import ObjectToUpdate from '../interfaces/obj-to-update.interface';


const viewportWidth = 800;
const viewportHeight = 600;
const backgroundColor = 0x1099bb;

const app = new Application(viewportWidth, viewportHeight, {backgroundColor: backgroundColor});
const objectsToUpdate = [];
document.body.appendChild(app.view);

app.ticker.add(function (delta) {
    objectsToUpdate.forEach(({obj, coords}) => obj.update(coords));
});

const Renderer = {
    createSprite(sprImagePath: string): any {
        const sprite = Sprite.fromImage(sprImagePath);
        sprite.anchor.set(0.5);
        app.stage.addChild(sprite);
        return {
            getPosition: (): PointCoordinates => {
                const {x, y} = sprite;
                return <PointCoordinates>{x, y};
            },
            setPosition: (coords: PointCoordinates): void => {
                const {x, y} = coords;
                sprite.x = x;
                sprite.y = y;
            },
            rotateAt: (angle: number): void => {
                console.log(angle);
                sprite.rotation = angle;
            }
        };
    },

    createAnimatedSprite(frames: Array<string>): any {

        const textureLoader = new Promise((resolve, reject) => {
            loader.reset();
            loader.add(frames);
            loader.load((loader, resources) => {
                const keys = Object.keys(resources);
                const textures = keys.map(key => resources[key].texture);
                resolve(<extras.AnimatedSprite>(new extras.AnimatedSprite(textures)));
            });
        });

        textureLoader.then((animatedSprite: extras.AnimatedSprite) => {
            animatedSprite.anchor.set(0.5);
            app.stage.addChild(animatedSprite);
        });

        return {
            play: (speed: number): void => {
                textureLoader.then((animatedSprite: extras.AnimatedSprite) => {
                    animatedSprite.animationSpeed = speed;
                    animatedSprite.gotoAndPlay(0);
                });
            },

            setPosition: (coords: PointCoordinates): void => {
                const {x, y} = coords;

                textureLoader.then((animatedSprite: extras.AnimatedSprite) => {
                    animatedSprite.x = x;
                    animatedSprite.y = y;
                });
            },

            rotateAt: (angle: number): void => {
                textureLoader.then((animatedSprite: extras.AnimatedSprite) => {
                    animatedSprite.rotation = angle;
                });
            },
            getAngle: async (): Promise<number> => {
                return await textureLoader.then((animatedSprite: extras.AnimatedSprite) => {
                    return animatedSprite.rotation;
                });
            }
        };

    },

    createText(text: string) {
        const pixiText = new Text(text);
        app.stage.addChild(pixiText);

        return {
            setPosition: (coords: PointCoordinates): void => {
                const {x, y} = coords;
                pixiText.x = x;
                pixiText.y = y;
            },
            setText: (text: string): void => {
                pixiText.text = text;
            }
        }
    },
    pushToUpdate(obj: ObjectToUpdate, coords?: PointCoordinates): void {
        objectsToUpdate.push({obj, coords});
    },
    getApp(): Application {
        return app;
    }
};

export default Renderer;