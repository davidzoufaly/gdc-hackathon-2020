function randomObstacle() {
  const rnd = random([1, 2, 3, 4, 5, 6]);

  if (rnd === 1) {
    return obstacleImg1;
  } else if (rnd === 2) {
    return obstacleImg2;
  } else if (rnd === 3) {
    return obstacleImg3;
  } else if (rnd === 4) {
    return obstacleImg4;
  } else if (rnd === 5) {
    return obstacleImg5;
  } else if (rnd === 6) {
    return obstacleImg7;
  }
}

class Obstacle {
  constructor() {
    this.obstacle = randomObstacle();
    this.x = width + 100;
    this.rw = this.obstacle.w;
    this.rh = this.obstacle.h;
    this.y = height - this.rh - 18 - this.obstacle.y || height - this.rh - 18;
  }

  move() {
    this.x -= 7;
  }

  show() {
    if (this.obstacle === obstacleImg5 || this.obstacle === obstacleImg7) {
      image(
        obstacleImg6.img,
        this.x - 100,
        height - obstacleImg6.h - 18,
        obstacleImg6.w,
        obstacleImg6.h
      );

      image(
        obstacleImg0.img,
        this.x,
        height - obstacleImg0.h - 18,
        obstacleImg0.w,
        obstacleImg0.h
      );
    }

    image(this.obstacle.img, this.x, this.y, this.rw, this.rh);
  }
}
