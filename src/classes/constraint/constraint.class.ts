import PointCoordinates from '@interfaces/point.interface';

export default class Constraint {

    constructor(private point1: PointCoordinates,
                private point2: PointCoordinates,
                private size: number) {
    }

    public update(): void {
        const dx = this.point1.x - this.point2.x;
        const dy = this.point1.y - this.point2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = (this.size - dist) / dist;
        const fx = dx * force * 0.5;
        const fy = dy * force * 0.5;

        this.point1.x += fx;
        this.point1.y += fy;
        this.point2.x -= fx;
        this.point2.y -= fy;
    }

}