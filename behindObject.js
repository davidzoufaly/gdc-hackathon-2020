function randomBehindObject() {
  const rnd = random([1, 2, 3, 4]);

  if (rnd === 1) {
    return bhObj1;
  } else if (rnd === 2) {
    return bhObj2;
  } else if (rnd === 3) {
    return bhObj3;
  } else if (rnd === 4) {
    return bhObj4;
  }
}

class BehindObject {
  constructor() {
    this.isBig = random(1) > 0.5;
    this.bhObj = randomBehindObject();
    this.rw = this.isBig ? this.bhObj.w * 1.5 : this.bhObj.w;
    this.rh = this.isBig ? this.bhObj.h * 1.5 : this.bhObj.h;
    this.x = width;
    this.speed = 0;
    this.y = height - this.rh - 18;
  }

  speedUp(score) {
    if (this.speed < 7) {
      this.speed = 3.5 + score / 2000;
    }
  }

  move() {
    this.x -= this.speed;
  }

  show() {
    image(this.bhObj.img, this.x, this.y, this.rw, this.rh);
  }
}
