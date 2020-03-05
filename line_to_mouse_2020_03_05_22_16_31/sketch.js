function setup() {
  createCanvas(400, 400);
  background(220);
}

function mousePressed() {
  line(width/2,height/2,mouseX,mouseY);
  ellipse(mouseX,mouseY,10,10);
}