//Circle Array
var canvasX = 400;
var canvasY = 400;
var radX = 10;
var radY = 10;
var finish;

function setup() {
  createCanvas(canvasX, canvasY);
  background(255)
}

function draw() {
  if (!finish) {
    for (let x = radX; x < canvasX; x += radX*2) {
      for (let y = radY; y < canvasY; y += radY*2) {
        let randR = random(255);
        let randG = random(255);
        let randB = random(255);
        stroke(randR, randG, randB, 255);
        strokeWeight(1);
        fill(0, 0);
        ellipse(x, y, radX, radY);
      }
    }
  finish = true;
  }
}