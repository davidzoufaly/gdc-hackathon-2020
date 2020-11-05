function randomObstacle() {
  const rnd = random([0, 1, 2, 3, 4, 5]);

  if (rnd === 1) {
    return obstacleImg1;
  } else if (rnd === 2) {
    return obstacleImg2;
  } else if (rnd === 3) {
    return obstacleImg3;
  } else if (rnd === 4) {
    return obstacleImg4;
  } else if (rnd === 0) {
    return obstacleImg0;
  } else if (rnd === 5) {
    return obstacleImg5;
  }
}

class Obstacle {
  constructor() {
    this.obstacle = randomObstacle();
    this.x = width;
    this.y = height - this.r - 18;
    this.r = 70;
  }

  move() {
    this.x -= 7;
  }

  show() {
    image(this.obstacle, this.x, this.y, this.r, this.r);
  }
}
