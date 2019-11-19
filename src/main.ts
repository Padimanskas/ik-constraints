import IKChain from '@classes/chain.class';
import renderer from '@utils/renderer';
import PointCoordinates from '@interfaces/point.interface';
import crowParticleSettings from '@particles/crow-settings';
import ParticleType from '@interfaces/particle.interface';

const chain = new IKChain(5, 105);
const target = <PointCoordinates>{x: 0, y: 0};
const mouse = <PointCoordinates>{x: 0, y: 0};

const app = renderer.getApp();
const vpHalfWidth = app.screen.width / 2;
const vpHalfHeight = app.screen.height / 1.25;
const base = renderer.createSprite('assets/base.png', 100);
base.setPosition(<PointCoordinates>{x: vpHalfWidth, y: vpHalfHeight});

renderer.blink((switcher: boolean) => {
    switcher ? base.applyFilter() : base.removeFilter();
}, 300);

renderer.pushToUpdate({update: () => {
    target.x += mouse.x - target.x;
    target.y += mouse.y - target.y;
}});

renderer.pushToUpdate(chain, target);

//////crows//////
const crowEmitter = renderer.createParticleEmitter(['assets/crow-1.png', 'assets/crow-2.png'], crowParticleSettings, ParticleType.ANIMATED);
crowEmitter.on();
crowEmitter.updateSpawnPos(<PointCoordinates>{x: vpHalfWidth, y: vpHalfHeight});
//////crows//////

//////light//////
const light = renderer.createAnimatedSprite(['assets/light-1.png', 'assets/light-2.png']);
light.setPosition(<PointCoordinates>{x: vpHalfWidth+8, y: vpHalfHeight-55});
light.play(0.25);
//////light//////

//////counter//////
const counter = renderer.createAnimatedSprite([
    'assets/number-0.png',
    'assets/number-1.png',
    'assets/number-2.png',
    'assets/number-3.png',
    'assets/number-4.png',
    'assets/number-5.png',
    'assets/number-exclamation.png',
]);
counter.setPosition(<PointCoordinates>{x: vpHalfWidth + 8, y: vpHalfHeight});
counter.play(0.05);
//////counter//////


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