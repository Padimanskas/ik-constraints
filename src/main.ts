import IKChain from './classes/chain.class';
import renderer from './renderer';

let chain = new IKChain(3, 100);
let target = {
    x: 0,
    y: 0
};
let mouse = {
    x: 0,
    y: 0
};

chain.generate();

renderer.pushToUpdate({update: () => {
    target.x += mouse.x - target.x;
    target.y += mouse.y - target.y;
}});

renderer.pushToUpdate(chain, target);

document.body.addEventListener('mousemove', function (e: MouseEvent) {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
});