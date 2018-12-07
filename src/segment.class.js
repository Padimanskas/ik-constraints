export default class IKSegment {

  constructor(size, head, tail) {
    this.size = size;
    this.head = head || {
      x: 0,
      y: 0
    };
    this.tail = tail || {
      x: this.head.x + size,
      y: this.head.y + size
    };
  }

  update() {
    // Position derivitives
    const dx = this.head.x - this.tail.x;
    const dy = this.head.y - this.tail.y;

    const dist = Math.sqrt(dx * dx + dy * dy);
    let force = 0.5 - this.size / dist * 0.5;
    const strength = 0.995; // No springiness

    force *= 0.99;

    const fx = force * dx;
    const fy = force * dy;

    this.tail.x += fx * strength * 2.0;
    this.tail.y += fy * strength * 2.0;
    this.head.x -= fx * (1.0 - strength) * 2.0;
    this.head.y -= fy * (1.0 - strength) * 2.0;
  }
}