//Define Variables
let canvasX = 500;
let canvasY = 500;
let rad = 50;
let step = 1;
let R, G, B, finish;

function setup() {
  createCanvas(canvasX, canvasY);
  background(200)
  
  //Initiate Cicle Drawing Procedure
  drawCircles()
  
  //setup reset button
  r = createButton('reset');
  r.position(width-43,height-18)
  r.mousePressed(reset);
}

function drawCircles() {
  //draw circles accordind to given diamete and canvas size
  for (let x = rad * step; x < canvasX - (rad / 2); x += rad * step) {
    for (let y = rad * step; y < canvasY - (rad / 2); y += rad * step) {
      R = random(255);
      G = random(255);
      B = random(255);
      stroke(R, G, B, 255);
      strokeWeight(1);
      fill(0, 0);
      ellipse(x, y, rad, rad);
    }
  }
}

function reset() {
  background(200);
  drawCircles();
}
