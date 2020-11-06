let bear;
let bearImg;
let obstacleImg;
let backgroundImg;
let obstacles = [];
let behindObjects = [];
let isGameOver = true;
let spawnProbability = 0.008;
let startTime = Date.now();
let spritesheet;
let spritedata;

function preload() {
  bearImg = loadImage("./assets/bear/idle.png");
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

function reset() {
  bear = new Bear();
  isGameOver = false;
  obstacles = [];
  behindObjects = [];
  startTime = Date.now();
  loop();
}

function setup() {
  createCanvas(514, 289);
  reset();
}

function keyPressed() {
  if (key == " " || keyCode == UP_ARROW) {
    if (isGameOver) {
      reset();
    } else {
      bear.jump();
    }
  }
}

function draw() {
  console.log(obstacles);
  if (obstacles.length > 5) {
    obstacles.shift();
  }

  if (behindObjects.length > 10) {
    behindObjects.shift();
  }

  let score = Math.floor((Date.now() - startTime) / 8);
  background(backgrounImg);

  if (random(1) < spawnProbability) {
    obstacles.push(new Obstacle());
  }

  if (random(1) < 0.012) {
    behindObjects.push(new BehindObject());
  }

  for (let b of behindObjects) {
    b.move();
    b.show();
  }

  for (let o of obstacles) {
    o.move();
    o.show();
    if (bear.hits(o)) {
      isGameOver = true;
      noLoop();
    }
  }

  if (keyIsDown(DOWN_ARROW) || keyIsDown(CONTROL)) {
    bear.crounch();
  } else {
    bear.stand();
  }

  bear.show();
  bear.move();

  strokeWeight(4);
  stroke("#13b2e2");
  line(0, height - 18, width, height - 18);

  strokeWeight(16);
  stroke("#86D0EE");
  line(0, height - 8, width, height - 8);

  strokeWeight(0);
  textSize(16);
  fill("#93A1AD");
  text(`Score: ${score}`, width - 120, 30);

  if (isGameOver) {
    strokeWeight(0);
    textSize(14);
    fill("#93A1AD");
    image(control, 40, height / 2 - 14, 108, 28);
    text("to Jump/Start", 160, height / 2 + 4);
    image(spacebar, 260, height / 2 - 14, 148, 28);
    text("to Crounch", 420, height / 2 + 4);
  }
}
