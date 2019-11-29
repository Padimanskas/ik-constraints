import IKChain from '@classes/chain.class';
import renderer from '@utils/renderer';
import PointCoordinates from '@interfaces/point.interface';
import crowParticleSettings from '@particles/crow-settings';
import ParticleType from '@interfaces/particle.interface';
import {textStyles} from "@constants/text-styles.const";
import Map from "@classes/map.class";
import {testMapTiles, testMap} from "./maps/test-map.map";
import 'pixi-tiledmap';
import { extras } from 'pixi.js';
import Renderer from '@utils/renderer';
import Loader = PIXI.loaders.Loader;
import { loader } from 'pixi.js';

//import { extras: { renderer } } from 'pixi.js';

/*const chain = new IKChain(5, 105);
const target = <PointCoordinates>{x: 0, y: 0};
const mouse = <PointCoordinates>{x: 0, y: 0};*/

const app = renderer.getApp();
const vpHalfWidth = app.screen.width / 2;
const vpHalfHeight = app.screen.height / 1.25;
/*const base = renderer.createSprite('assets/base.png', 100);
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
});*/

/*const someText = renderer.createText('something goes here', 'red');
const someText2 = renderer.createText('something goes here', 'red');
someText.setPosition({x: 100, y: 100});
someText2.setPosition({x: 110, y: 110});
someText.setTextStyle(textStyles.firstColor);

someText.setZOrder(1);
someText2.setZOrder(0);

const fog = renderer.createParticleEmitter(['assets/base.png'], crowParticleSettings);
//fog.on();
fog.updatePosition({x: vpHalfWidth, y: vpHalfHeight});


document.body.addEventListener('mousedown', function (e: MouseEvent) {
    fog.getEmitterState() ? fog.off() : fog.on();
    fog.setZOrder(0);
});*/

//const testMap1 = new Map(testMap, testMapTiles);
//testMap1.render();

/*PIXI.loader.add('assets/maps/test-map.json', function(res) {
    console.log(res);
});

PIXI.loader.load();*/

type extras = typeof PIXI.extras;
interface withTiledMap extends extras {TiledMap: any}

//const assets = new (<withTiledMap>PIXI.extras).TiledMap('assets/maps/test-map.json');

//console.log( assets  );


PIXI.loader.add('assets/maps/test-map.json', function(res) {

    console.log( res.tiledMap );
});

PIXI.loader.load();

/*
loader.add('atlas', 'assets/maps/test-map.json');

loader.load(function(loader, resources) {
    console.log('resources', resources);
    var tilemap = new PIXI.tilemap;
});*/
