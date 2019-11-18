import PointCoordinates from '@interfaces/./point.interface';

interface SpriteInterface {
    getPosition: () => PointCoordinates;
    setPosition: (PointCoordinates) => void;
    rotateAt: (number) => void;
}

export default SpriteInterface;