import render from '../utils/renderer'
import utils from '../utils/utils'
import Bullet from '../classes/bullet.class';

/**
 * Bullets factory class
 */
export default class Bullets {

    private bullets: Bullet[] = [];

    constructor() {
        render.pushToUpdate({
            update: () => {
                this.bullets.forEach(bullet => {
                    bullet.update();
                    if(this.checkBulletIsOutside(bullet)) {
                        this.removeBullet(bullet);
                    }
                });
            }
        });
    }

    createBullet(x: number, y: number, speed: number, angle: number): void {
        this.bullets.push(new Bullet(x, y, speed, angle));
    }

    checkBulletIsOutside(bullet: Bullet): boolean {
        return utils.isOutOfScreen(bullet.getPosition());
    }

    removeBullet(bullet: Bullet): void {
        bullet.removeSprite();
        let bulletId = this.bullets.indexOf(bullet);
        this.bullets.splice(bulletId, 1);
    }

}