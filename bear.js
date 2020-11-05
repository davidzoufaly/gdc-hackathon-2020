

class Bear {
  constructor() {
    this.r = 70;
    this.x = 50;
    this.y = height - this.r - 18;
    this.vy = 0 ;
    this.gravity = 1.4;
  }

  jump() {
    if (this.y == height - this.r - 18) {
      this.vy = -24;
    }
  }

  crunch() {
     this.vy = 5;
     // TODO
     console.log('crunch');
  }

  hits(bar) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = bar.x + bar.r * 0.5;
    let y2 = bar.y + bar.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, bar.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r - 18);
  }

  show() {
    image(bearImg, this.x, this.y, this.r, this.r);
  }
}
