function setup() {
  createCanvas(400, 400);
  background(100, 38, 28);
  sketch();
  //drawJapan();
}

function sketch() {
  stroke(255);
  strokeWeight(10);
  line(0, 0, 400, 400);
  line(0, 400, 400, 0);
  fill(255);
  stroke(255);
  strokeWeight(0);
  ellipse(200, 200, 100, 100);
}

function drawJapan() {
  background(255);
  fill(200, 0, 0);
  stroke(200, 0, 0);
  ellipse(200, 200, 50, 50);
}