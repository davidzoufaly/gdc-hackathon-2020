class Bear {
  constructor() {
    this.r = 70;
    this.x = 50;
    this.y = height - this.r - 18;
    this.vy = 0;
    this.gravity = 1.2;
    this.runSprite = new Sprite(spriteRundata, spriteRunsheet, 0.1);
    this.jumpSprite = new Sprite(spriteJumpdata, spriteJumpsheet, 0.05);
    this.crounchSprite = new Sprite(spriteCrounchdata, spriteCrounchsheet, 0.1);
    this.showedAnimation = this.runSprite;
  }

  jump() {
    if (this.y == height - this.r - 18) {
      this.vy = -22;
      this.showedAnimation = this.jumpSprite;
    }
  }

  crounch() {
    // TODO
    this.showedAnimation = this.crounchSprite;
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
    this.y = constrain(this.y, 10, height - this.r - 18);

    if (this.y === height - this.r - 18) {
      this.showedAnimation = this.runSprite;
    }
  }

  show() {
    this.showedAnimation.show(this.x, this.y, this.r);
  }
}
