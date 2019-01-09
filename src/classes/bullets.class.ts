import render from '../utils/renderer'
import utils from '../utils/utils'
import Bullet from '../classes/bullet.class';

export default class Bullets {

    private bullets: Array<Bullet> = [];

    constructor() {
        render.pushToUpdate({
            update: () => {
                this.bullets.forEach(bullet => {
                    bullet.update();
                    this.removeBullet(bullet);
                });
            }
        });
    }

    createBullet(x: number, y: number, speed: number, angle: number): void {
        this.bullets.push(new Bullet(x, y, speed, angle));
    }

    removeBullet(bullet: Bullet) {
        let isOutsideBullet = utils.isOutOfScreen(bullet.getPosition());
        if (isOutsideBullet) {
            bullet.removeSprite();
            let bulletId = this.bullets.indexOf(bullet);
            this.bullets.splice(bulletId, 1);
        }
    }

}