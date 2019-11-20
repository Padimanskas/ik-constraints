import renderer from '@utils/renderer'
import utils from '@utils/utils'


const app = renderer.getApp();
const vpHalfWidth = app.screen.width / 2;
const vpHalfHeight = app.screen.height / 1.25;

export default class Map {

    private sprite: any;
    private spriteObj: {id: number, spritePath: string, solid: boolean};

    constructor(private map: number[][] = [], private mapSprites, private tileSize: number = 31) {}

    render() {
        for (var y = 0; y < this.map.length; y++) {
            for (var x = 0; x < this.map[y].length; x++) {
                let tileX = (x * this.tileSize);
                let tileY = (y * this.tileSize);
                if (tileX < -this.tileSize || tileY < -this.tileSize || tileX > app.screen.width || tileY > app.screen.height)
                    continue;
                this.spriteObj = this.mapSprites.find(mapSprite => mapSprite.id === this.map[y][x]);
                this.sprite = renderer.createSprite(this.spriteObj.spritePath);
                this.sprite.setPosition({x: tileX, y: tileY});
                this.sprite.setZOrder(0);
            }
        }
    }
}