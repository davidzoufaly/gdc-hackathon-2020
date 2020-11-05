class Sprite {
  constructor(spritedata, spritesheet, speed) {
    this.spritedata = spritedata;
    this.spritesheet = spritesheet;
    this.speed = speed;
    this.index = 0;
  }

  getAnimation(spritedata, spritesheet) {
    let animation = [];
    let frames = spritedata.frames;

    for (let i = 0; i < frames.length; i++) {
      let pos = frames[i].position;
      let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
      animation.push(img);
    }
    return animation;
  }

  show(x, y, r) {
    console.log(x,y,r);
    let animation = this.getAnimation(this.spritedata, this.spritesheet);
    let index = floor(this.index) % animation.length;
    image(animation[index], x, y, r, r);
    this.index += this.speed;
  }
}
