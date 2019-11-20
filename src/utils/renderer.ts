import {Application, extras, filters, particles, Point, Sprite, Text, Texture} from 'pixi.js';
import PointCoordinates from '@interfaces/point.interface';
import ObjectToUpdate from '@interfaces/obj-to-update.interface';
import {AnimatedParticle, Emitter} from 'pixi-particles';
import ParticleType from "@interfaces/particle.interface";


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
    createSprite(sprImagePath: string, index?: number): any {
        const sprite = Sprite.fromImage(sprImagePath);
        sprite.anchor.set(0.5);
        sprite.scale = new Point(2, 2);
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
                sprite.rotation = angle;
            },
            setAnchor: (x: number, y: number): void => {
                sprite.anchor.set(x, y);
            },
            setIndex: (index: number): void => {
                app.stage.setChildIndex(sprite, index);
            },
            remove(): void {
                app.stage.removeChild(sprite);
            },
            applyFilter: (): void => {
                Renderer.applyFilter(sprite);
            },
            removeFilter: (): void => {
                Renderer.removeFilter(sprite);
            }
        };
    },

    createAnimatedSprite(frames: Array<string>): any {
        const animatedSprite = extras.AnimatedSprite.fromImages(frames);
        animatedSprite.anchor.set(0.5);
        animatedSprite.scale = new Point(2, 2);
        app.stage.addChild(animatedSprite);

        return {
            play: (speed: number): void => {
                animatedSprite.animationSpeed = speed;
                animatedSprite.play();
            },

            playOnce: (speed: number): void => {
                animatedSprite.animationSpeed = speed;
                animatedSprite.loop = false;
                animatedSprite.play();
                animatedSprite.onComplete = () => animatedSprite.destroy();
            },

            remove(): void {
                app.stage.removeChild(animatedSprite);
            },

            setPosition: (coords: PointCoordinates): void => {
                const {x, y} = coords;
                animatedSprite.x = x;
                animatedSprite.y = y;
            },

            rotateAt: (angle: number): void => {
                animatedSprite.rotation = angle;
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
    createTexture: (imagePath: string): Texture => {
        return Texture.fromImage(imagePath);
    },
    createParticleEmitter: (images: Array<string>, config: any, type: ParticleType = ParticleType.STATIC): any => {
        const container = new particles.ParticleContainer();
        container.setProperties({
            scale: true,
            position: true,
            rotation: true,
            uvs: true,
            alpha: true
        });

        let emitter;

        if(type === ParticleType.ANIMATED) {
            emitter = new Emitter(container, [{framerate: 9, loop: true, textures: images}], config);
            emitter.particleConstructor = AnimatedParticle;
        }

        if(type === ParticleType.STATIC) {
            emitter = new Emitter(container, images.map(imageName => Renderer.createTexture(imageName)), config);
        }

        app.stage.addChild(container);

        let elapsed = Date.now();

        const update = function () {
            requestAnimationFrame(update);
            const now = Date.now();
            emitter.update((now - elapsed) * 0.001);
            elapsed = now;
        };

        return {
            on: (): void => {
                emitter.autoUpdate = emitter.emit = true;
            },
            off: (): void => {
                emitter.emit = false;
            },
            remove: (): void => {
                app.stage.removeChild(container);
            },
            updatePosition: (point: PointCoordinates): void => {
                container.x = point.x;
                container.y = point.y;
            },
            updateSpawnPos: (point: PointCoordinates): void => {
                emitter.updateSpawnPos(point.x, point.y);
            },
            getEmitterState: (): boolean => emitter.emit
        };

    },

    applyFilter(sprite: Sprite): void {
        const colorMatrix = new filters.ColorMatrixFilter();
        colorMatrix.negative();
        sprite.filters = [colorMatrix];
    },

    removeFilter(sprite?: Sprite): void {
        sprite.filters = null;
    },

    pushToUpdate(obj: ObjectToUpdate, coords?: PointCoordinates): void {
        objectsToUpdate.push({obj, coords});
    },

    getApp(): Application {
        return app;
    },

    blink(callback: (n: boolean) => any, time: number, context?: any): void {
        let elapsed = Date.now();
        let blinkState = true;

        this.pushToUpdate({
            update: () => {
                let now = Date.now();
                if ((now - elapsed) > time) {
                    blinkState = !blinkState;
                    callback.call(context || this, blinkState);
                    elapsed = now;
                }
            }
        });
    }

};

export default Renderer;