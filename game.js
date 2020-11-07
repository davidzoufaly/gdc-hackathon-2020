let bear;
let bearImg;
let obstacleImg;
let backgroundImg;
let obstacles = [];
let behindObjects = [];
let isGameOver = true;
let spawnTime = 2;
let startTime = Date.now();
let spritesheet;
let spritedata;
let time;

function reset() {
  isGameOver = false;
  obstacles = [];
  behindObjects = [];
  startTime = Date.now();
  time = null;
  loop();
}

function setup() {
  createCanvas(714, 289);
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

// Harder over time
function spawn(score) {
  const def = 2500;
  const variationNum = 500;
  const minNumber = 1000;
  let nextNumber = def - score / 3;

  if (nextNumber > minNumber) {
    return random(nextNumber, nextNumber + variationNum);
  } else {
    return random(minNumber, minNumber + variationNum);
  }
}

function draw() {
  const dateNow = Date.now();
  const score = isGameOver ? 0 : Math.floor((dateNow - startTime) / 8);

  // Optimalization
  if (obstacles.length > 5) {
    obstacles.shift();
  }

  // Optimalization
  if (behindObjects.length > 10) {
    behindObjects.shift();
  }

  background(backgrounImg);

  if (!time) {
    time = dateNow;
  }

  if (dateNow - time > spawn(score)) {
    obstacles.push(new Obstacle());
    time = null;
  }

  if (random(1) < 0.012) {
    behindObjects.push(new BehindObject());
  }

  for (let b of behindObjects) {
    b.move();
    b.show();
    b.speedUp(score);
  }

  for (let o of obstacles) {
    o.move();
    o.show();
    o.speedUp(score);
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

    image(spacebar, 140, height / 2 - 14, 148, 28);
    text("to Jump/Start", 300, height / 2 + 4);
    image(control, 400, height / 2 - 14, 108, 28);
    text("to Crouch", 520, height / 2 + 4);
  }
}
