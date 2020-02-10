let speed = 1,
  pacD = 30,
  startX = 200,
  startY = 200,
  currentX,
  currentY,
  xDist,
  yDist,
  currentDir = 1,
  directions = [-1 / 2, 0, 1 / 2, 1],
  eyeXOffset,
  eyeYOffset,
  moving = false,
  mouths = [1 / 4, 3 / 16, 1 / 8, 1 / 16, 0, 1 / 16, 1 / 8, 3 / 16],
  currentMouth = 0;

function setup() {
  frameRate(60)
  createCanvas(400, 400);
  currentX = startX;
  currentY = startY;
}

function draw() {
  background(0);
  if (frameCount % 6 == 0) {
    updatePacMouth();
  }
  updatePos();
  drawPac();
}

function updatePos() {
  xDist = mouseX - currentX;
  yDist = mouseY - currentY;
  if (xDist != 0 || yDist != 0) {
    moving = true;
    if (abs(xDist) > abs(yDist)) {
      if (xDist > 0) {
        currentDirection = 1;
        eyeXOffset = -pacD / 10;
        eyeYOffset = -pacD / 5;
        currentX += speed;
      } else {
        currentDirection = 3;
        eyeXOffset = pacD / 10;
        eyeYOffset = -pacD / 5;
        currentX -= speed;
      }
    } else {
      if (yDist > 0) {
        currentDirection = 2;
        eyeXOffset = pacD / 5;
        eyeYOffset = -pacD / 10;
        currentY += speed;
      } else {
        currentDirection = 0;
        eyeXOffset = -pacD / 5;
        eyeYOffset = pacD / 10;
        currentY -= speed;
      }
    }
  } else {
    moving = false;
  }
}

function updatePacMouth() {
  if (moving) {
    if (currentMouth >= 7) {
      currentMouth = 0;
    } else {
      currentMouth += 1;
    }
  } else {
    currentMouth = 4;
  }
}

function drawPac() {
  if (moving) {
    strokeWeight(0);
    fill(250, 230, 0);
    arc(currentX, currentY, pacD, pacD, PI * mouths[currentMouth] + directions[currentDirection] * PI, -PI * mouths[currentMouth] + directions[currentDirection] * PI);
    fill(0);
    let eyeX = currentX + eyeXOffset;
    let eyeY = currentY + eyeYOffset;
    let eyeD = pacD / 5;
    ellipse(eyeX, eyeY, eyeD, eyeD);
  } else if (!moving) {
    fill(250, 230, 0);
    ellipse(currentX, currentY, pacD, pacD)
    let leftEyeX = currentX - (pacD / 5);
    let leftEyeY = currentY - (pacD / 8);
    let rightEyeX = currentX + (pacD / 5);
    let rightEyeY = currentY - (pacD / 8);
    fill(0)
    let eyeD = pacD / 8;
    ellipse(leftEyeX, leftEyeY, eyeD, eyeD);
    ellipse(rightEyeX, rightEyeY, eyeD, eyeD);
    strokeWeight(pacD / 15)
    line(currentX - (pacD / 2) + (pacD / 10), currentY + (pacD / 10), currentX + (pacD / 2) - (pacD / 10), currentY + (pacD / 10));
  }
}