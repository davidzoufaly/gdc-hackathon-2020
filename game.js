let bear;
let bearImg;
let obstacleImg;
let backgroundImg;
let obstacles = [];
let behindObjects = [];
let isGameOver = true;
let spawnProbability = 0.008;
let startTime = Date.now();

function preload() {
  bearImg = loadImage("./assets/unicorn.png");
  backgrounImg = loadImage("./assets/mountain.jpg");
  obstacleImg1 = loadImage("./assets/obstacles/hill1.png");
  obstacleImg2 = loadImage("./assets/obstacles/hill2.png");
  obstacleImg3 = loadImage("./assets/obstacles/hill3.png");
  obstacleImg4 = loadImage("./assets/obstacles/hill4.png");
  bhObj1 = loadImage("./assets/behindObjects/bh1.png");
  bhObj2 = loadImage("./assets/behindObjects/bh2.png");
  bhObj3 = loadImage("./assets/behindObjects/bh3.png");
  bhObj4 = loadImage("./assets/behindObjects/bh4.png");
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
  let score = Math.floor((Date.now() - startTime) / 8)

  if (random(1) < spawnProbability) {
    obstacles.push(new Obstacle());
  }

  if (random(1) < 0.012) {
    behindObjects.push(new BehindObject());
  }

  background(backgrounImg);

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
    bear.crunch();
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
    textSize(16);
    fill("#93A1AD");
    text("Spacebar to Jump/Start Ctrl to Crunch", width / 2 - 150, height / 2);
  }

  bear.show();
  bear.move();
}
