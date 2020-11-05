// TODO: OBSTACLES 2 SIZES
// TODO: BEHIND OBJECTS DIFFERENT SIZES
// TODO: CAVE
// TODO: GAP
// TODO: SPRITES

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
  obstacleImg0 = loadImage("./assets/obstacles/cave.png");
  obstacleImg1 = loadImage("./assets/obstacles/hill1.png");
  obstacleImg2 = loadImage("./assets/obstacles/hill2.png");
  obstacleImg3 = loadImage("./assets/obstacles/hill3.png");
  obstacleImg4 = loadImage("./assets/obstacles/hill4.png");
  obstacleImg5 = loadImage("./assets/obstacles/cave2.png"); 
  bhObj1 = loadImage("./assets/behindObjects/bh-1.png");
  bhObj2 = loadImage("./assets/behindObjects/bh-2.png");
  bhObj3 = loadImage("./assets/behindObjects/bh-3.png");
  bhObj4 = loadImage("./assets/behindObjects/bh-4.png");
  spriteRundata = loadJSON("./sprites/run.json");
  spriteRunsheet = loadImage("./assets/bear/run.png");
  spriteJumpdata = loadJSON("./sprites/jump.json");
  spriteJumpsheet = loadImage("./assets/bear/jump.png");
  spriteCrounchdata = loadJSON("./sprites/crounch.json");
  spriteCrounchsheet = loadImage("./assets/bear/crounch.png")
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
  if (key == " " || keyCode == 16) {
    if (isGameOver) {
      reset();
    } else {
      bear.jump();
    }
  }
}

function draw() {
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
  }

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
    image(control, 40, (height / 2) - 14, 108, 28);
    text("to Jump/Start", 160, (height / 2) + 4);
    image(spacebar, 260, (height / 2) - 14, 148, 28);
    text("to Crunch", 420, (height / 2) + 4);
  }

  bear.show();
  bear.move();
}
