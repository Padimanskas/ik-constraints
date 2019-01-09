import IKChain from './classes/chain.class';
import renderer from './utils/renderer';
import PointCoordinates from './interfaces/point.interface';

const chain = new IKChain(5, 105);
const target = <PointCoordinates>{x: 0, y: 0};
const mouse = <PointCoordinates>{x: 0, y: 0};

const app = renderer.getApp();
const vpHalfWidth = app.screen.width / 2;
const vpHalfHeight = app.screen.height / 1.25;
const base = renderer.createSprite('assets/base.png', 100);
base.setPosition(<PointCoordinates>{x: vpHalfWidth, y: vpHalfHeight});

renderer.pushToUpdate({update: () => {
    target.x += mouse.x - target.x;
    target.y += mouse.y - target.y;
}});

renderer.pushToUpdate(chain, target);

document.body.addEventListener('mousemove', function (e: MouseEvent) {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
});

document.body.addEventListener('mousedown', function (e: MouseEvent) {
    chain.prepareToShoot();
});

document.body.addEventListener('mouseup', function (e: MouseEvent) {
    chain.disablePreparing();
    chain.shoot();
});