import IKChain from './chain.class';

let chain = new IKChain(4, 100);
let target = {
    x: 0,
    y: 0
};
let mouse = {
    x: 0,
    y: 0
};

chain.generate();

function loop() {
    target.x += mouse.x - target.x;
    target.y += mouse.y - target.y;

    chain.update(target);
    chain.draw();
    requestAnimationFrame(loop);
}

loop();

document.getElementById('canvas').addEventListener('mousemove', function (e: MouseEvent) {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
});