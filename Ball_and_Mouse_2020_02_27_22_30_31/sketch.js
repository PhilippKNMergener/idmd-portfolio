//circle following mouse

function setup() {
  createCanvas(500, 500);
  background(180);
  //setup reset button
  r = createButton('reset');
  r.position(width-43,height-18)
  r.mousePressed(reset);
}

function draw() {
  //check for mouse pressed
  if (mouseIsPressed){fill(0)}else{fill(255)}
  ellipse(mouseX,mouseY,50);
}

//reset function
function reset() {
  background(180);
}