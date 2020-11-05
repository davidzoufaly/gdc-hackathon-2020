let bear;
let bearImg;
let obstacleImg;
let backgroundImg;
let bars = [];

function preload() {
  bearImg = loadImage("./assets/unicorn.png");
  obstacleImg = loadImage("./assets/train.png");
  backgrounImg = loadImage("./assets/background.jpg");
}

function setup() {
  createCanvas(800, 450);
  bear = new Bear();
}

function keyPressed() {
  if (key == " ") {
    bear.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    bars.push(new Bar());
  }

  background(backgrounImg);

  for (let b of bars) {
    b.move();
    b.show();
    if (bear.hits(b)) {
         console.log('game over');
         noLoop();
    }
  }

  bear.show();
  bear.move();
}
