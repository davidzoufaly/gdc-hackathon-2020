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

function reset() {
  isGameOver = false;
  obstacles = [];
  behindObjects = [];
  startTime = Date.now();
  loop();
}

function setup() {
  createCanvas(514, 289);
  bear = new Bear();
  noLoop();
}

function keyPressed() {
  if (key == " " || keyCode == UP_ARROW) {
    if (isGameOver) {
      reset();
    } else {
      bear.jump();
    }
  }

  if (keyCode == DOWN_ARROW || keyCode == CONTROL) {
    bear.reset();
  }
}

function draw() {
  if (obstacles.length > 5) {
    obstacles.shift();
  }

  if (behindObjects.length > 10) {
    behindObjects.shift();
  }

  let score = isGameOver ? 0 : Math.floor((Date.now() - startTime) / 8);
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

    image(spacebar, 40, height / 2 - 14, 148, 28);
    text("to Jump/Start", 200, height / 2 + 4);
    image(control, 300, height / 2 - 14, 108, 28);
    text("to Crouch", 420, height / 2 + 4);
  }
}
