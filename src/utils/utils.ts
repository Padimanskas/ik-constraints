import PointCoordinates from '../interfaces/point.interface'

const utils = {

    getAngleBetweenPoints(point1: PointCoordinates, point2: PointCoordinates): number {
        return Math.atan2(point1.y - point2.y, point1.x - point2.x);
    },

    getCenterBetweenPoints(point1: PointCoordinates, point2: PointCoordinates): PointCoordinates {
        const centerX = (point1.x + point2.x) / 2;
        const centerY = (point1.y + point2.y) / 2;
        return <PointCoordinates>{x: centerX, y: centerY};
    }
};

export default utils;