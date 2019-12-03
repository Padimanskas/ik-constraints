import {loader, Sprite, extras} from 'pixi.js';

export const ResLoader = {
    loadJSONMap(pathToJSON: string): Promise<any> {
        return new Promise((resolve, rejected) => {
            loader.add(pathToJSON).load(() => {
                resolve({
                    getSpriteByTextureName(textureName: string): Sprite {
                        return new Sprite(loader.resources[pathToJSON].textures[textureName]);
                    },
                    getAnimatedSpriteByTextureName(textureName: string): extras.AnimatedSprite {
                        return new extras.AnimatedSprite([]);
                    }
                });
            });
        });
    }
};

