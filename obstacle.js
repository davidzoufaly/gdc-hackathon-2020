
  function randomObstacle() {
    const rnd = random([1,2,3,4])

    if (rnd === 1) {
         return obstacleImg1;
    } else if (rnd === 2) {
         return obstacleImg2;
    } else if (rnd === 3) {
         return obstacleImg3 
    } else if (rnd === 4) {
         return obstacleImg4
    }
  }

class Obstacle {
  constructor() {
    this.r = 60;
    this.x = width;
    this.y = height - this.r - 18;
    this.img = randomObstacle() 
  }

  move() {
    this.x -= 7;
  }

  show() {
    image(this.img, this.x, this.y, this.r, this.r);
  }
}
