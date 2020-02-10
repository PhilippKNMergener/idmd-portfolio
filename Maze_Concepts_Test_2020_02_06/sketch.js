let 
x,
y,
xVel,
xAcc,
yVel,
yAcc,
gatePassed,
leftPassed,
rightPassed;

function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
  xVel = 0;
  xAcc = 0;
  yVel = 0;
  yAcc = 0;
  leftPassed = false;
  rightPassed = false;
  gatePassed = false;
}

function draw() {
  background(170);
  updatePos();
  checkPassed();
  drawVector();
  drawEye();
  drawGate();
}

function updatePos() {
  xAcc = 0;
  yAcc = 0
  if (keyIsDown(LEFT_ARROW)) {
    xAcc -= 0.1;
    xVel -= 0.1;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    xAcc += 0.1;
    xVel += 0.1;
  }

  if (keyIsDown(UP_ARROW)) {
    yAcc -= 0.1;
    yVel -= 0.1;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yAcc += 0.1;
    yVel += 0.1;
  }
  if (x > 400 + 25) {
    x = -25
  } else if (x < -25) {
    x = 425;
  }
  if (y > 400 + 25) {
    y = -25
  } else if (y < -25) {
    y = 425
  }
  x = x + xVel;
  y = y + yVel;
}

function drawEye() {
  stroke(0)
  fill(255);
  strokeWeight(1);
  ellipse(x,y,50);
  fill(0);
  strokeWeight(0);
  ellipse(x,y,20);
}

function drawVector() {
  strokeWeight(5);
  stroke(180,100, 0);
  line(x,y,x+(xAcc*600), y+(yAcc*600));
  stroke(0,100,150);
  line(x, y, x+(xVel*60), y+(yVel*60));
}

function drawGate() {
  strokeWeight(10)
  if (gatePassed) {
    stroke(0, 255, 0);
  } else {
    stroke(255, 0, 0);
  } 
  line(100,50,120,50);
  line(100,100,120,100);
}

function checkPassed() {
  if (x >= 100 && x <= 120 && y >= 50 && y <= 100) {
    gatePassed = true;
  }
}