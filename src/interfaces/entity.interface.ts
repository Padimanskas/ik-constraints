import PointCoordinates from '@interfaces/point.interface';

interface Entity {
    setPosition(point: PointCoordinates): void
    getPosition(): PointCoordinates;
}

export default Entity;