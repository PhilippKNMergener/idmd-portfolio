let pacD = 50;
let target;


function setup() {
  createCanvas(400, 400);
  background(0)
  target = new dot();
}

function draw() {
  background(0)
  if (target.active) {
    target.display()
  }
}

function mousePressed() {
  target.updatePos()
  target.active = true
  print(target.x, target.y)
}

class dot {
  constructor() {
    this.D = pacD / 3;
    this.R = 100;
    this.G = 40;
    this.B = 255;
    this.x = 0;
    this.y = 0;
    this.active = false;
  }
  
  updatePos() {
    this.x = mouseX;
    this.y = mouseY;
  }
  
  display() {
    fill(this.R, this.G, this.B)
    ellipse(this.x, this.y, this.D, this.D);
  }
}