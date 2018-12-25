import PointCoordinates from './point.interface';

interface SpriteInterface {
    getPosition: () => PointCoordinates;
    setPosition: (PointCoordinates) => void;
}

export default SpriteInterface;