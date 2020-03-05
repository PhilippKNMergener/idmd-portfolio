var startX = 200;
var startY = 200;

function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
}

function draw() {
  background(204);
  stroke(0);
  strokeWeight(2);
  //draw horizontal lines on bottom half of the screen
  for (i = startX; i < mouseY; i = i + 8) {
    line(startY, i, mouseX, i);
  }
  //draw vertical lines on the right side of the screen
  for (i = startY; i < mouseX; i = i + 8) {
    line(i, startY, i, mouseY);
  }

  //draw classic selection box from start point to cursor
  strokeWeight(4);
  line(startX, mouseY, mouseX, mouseY);
  line(mouseX, startY, mouseX, mouseY);
  line(startX, startY, startX, mouseY);
  line(startX, startY, mouseX, startY);
}