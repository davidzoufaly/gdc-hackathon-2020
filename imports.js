function preload() {
  backgrounImg = loadImage("./assets/mountain.jpg");
  obstacleImg0 = {
    img: loadImage("./assets/obstacles/cave.png"),
    w: 90 * 2.8,
    h: 96 * 2.8,
  };
  obstacleImg1 = {
    img: loadImage("./assets/obstacles/hill1.png"),
    w: 32 * 2,
    h: 15 * 2,
  };
  obstacleImg2 = {
    img: loadImage("./assets/obstacles/hill2.png"),
    w: 34 * 2,
    h: 13 * 2,
  };
  obstacleImg3 = {
    img: loadImage("./assets/obstacles/hill3.png"),
    w: 26 * 2,
    h: 27 * 2,
  };
  obstacleImg4 = {
    img: loadImage("./assets/obstacles/hill4.png"),
    w: 36 * 2,
    h: 33 * 2,
  };
  obstacleImg5 = {
    img: loadImage("./assets/obstacles/topice.png"),
    w: 90 * 2.8,
    h: 96 * 2.8,
    y: 62,
    name: "topice",
  };
  obstacleImg7 = {
    img: loadImage("./assets/obstacles/topice2.png"),
    w: 90 * 2.8,
    h: 96 * 2.8,
    y: 62,
    name: "topice",
  };
  obstacleImg6 = {
    img: loadImage("./assets/obstacles/sign.png"),
    w: 53,
    h: 55,
  };
  bhObj1 = { img: loadImage("./assets/behindObjects/bh-1.png"), w: 44, h: 26 };
  bhObj2 = { img: loadImage("./assets/behindObjects/bh-2.png"), w: 66, h: 74 };
  bhObj3 = { img: loadImage("./assets/behindObjects/bh-3.png"), w: 59, h: 74 };
  bhObj4 = { img: loadImage("./assets/behindObjects/bh-4.png"), w: 69, h: 50 };
  spriteRundata = loadJSON("./sprites/run.json");
  spriteRunsheet = loadImage("./assets/bear/run.png");
  spriteJumpdata = loadJSON("./sprites/jump.json");
  spriteJumpsheet = loadImage("./assets/bear/jump.png");
  spriteCrounchdata = loadJSON("./sprites/crounch.json");
  spriteCrounchsheet = loadImage("./assets/bear/crounch.png");
  control = loadImage("./assets/controls/ctrl.png");
  spacebar = loadImage("./assets/controls/spacebar.png");
}
