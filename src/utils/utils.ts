import PointCoordinates from '../interfaces/point.interface'
import render from '../utils/renderer';

const utils = {

    getAngleBetweenPoints(point1: PointCoordinates, point2: PointCoordinates): number {
        return Math.atan2(point1.y - point2.y, point1.x - point2.x);
    },

    getCenterBetweenPoints(point1: PointCoordinates, point2: PointCoordinates): PointCoordinates {
        const centerX = (point1.x + point2.x) / 2;
        const centerY = (point1.y + point2.y) / 2;
        return <PointCoordinates>{x: centerX, y: centerY};
    },

    isOutOfScreen(position: PointCoordinates): boolean {
        const screen = render.getApp().screen;
        return position.x < 50 || position.x + 50 > screen.width || position.y < 50 || position.y + 50 > screen.height;
    }
};

export default utils;