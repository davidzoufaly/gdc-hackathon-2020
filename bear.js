class Bear {
  constructor() {
    this.r = 70;
    this.x = 50;
    this.y = height - this.r - 18;
    this.vy = 0;
    this.gravity = 1.6;
    this.runSprite = new Sprite(spriteRundata, spriteRunsheet, 0.1);
    this.jumpSprite = new Sprite(spriteJumpdata, spriteJumpsheet, 0.05);
    this.crounchSprite = new Sprite(spriteCrounchdata, spriteCrounchsheet, 0.1);
    this.showedAnimation = this.crounchSprite;
    this.crounchDiff = 0;
  }

  jump() {
    if (this.y == height - this.r - 18) {
      this.vy = -25;
      this.showedAnimation = this.jumpSprite;
    }
  }

  crounch() {
    if (this.y == height - this.r - 18) {
      this.crounchDiff = 20;
      this.showedAnimation = this.crounchSprite;
    }
  }

  stand() {
    this.crounchDiff = 0;
  }

  hits(obstacle) {
    return collideRectRect(
      this.x,
      this.y + this.crounchDiff,
      this.r,
      this.r,
      obstacle.x + 100,
      obstacle.y,
      obstacle.rw,
      obstacle.rh
    );
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 10, height - this.r - 18);

    if (this.y === height - this.r - 18) {
      this.showedAnimation = this.runSprite;
    }
  }

  show() {
    this.showedAnimation.show(this.x, this.y, this.r);
  }
}
