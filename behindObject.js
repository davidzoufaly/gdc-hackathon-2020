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
    this.img = randomBehindObject();
    this.r = random(1) < 0.5 ? 66 : 45;
    this.x = width;
    this.y = height - this.r - 18;
  }

  move() {
    this.x -= 3.5;
  }

  show() {
    image(this.img, this.x, this.y, this.r, this.r);
  }
}
