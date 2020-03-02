//define variables
let player;
let gate1, gate2, gate3, gate4, gate5;

function setup() {
  createCanvas(400, 400);
  //initiate a new objects
  player = new Player();
}

//called 60 times a second
function draw() {
  updateObjects();
  drawFrame();
}

//calculate object psitions and states
function updateObjects() {
  player.updateMovement();
}

//draw a new frame when called
function drawFrame() {
  background(220);
  player.drawVectors();
  player.display();
}

//Player class setup
class Player {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.xVel = 0;
    this.xAcc = 0;
    this.yVel = 0;
    this.yAcc = 0;
  }

  //update acceleration and velocity according to arrow keys
  updateMovement() {
    player.xAcc = 0;
    player.yAcc = 0
    if (keyIsDown(LEFT_ARROW)) {
      this.xAcc -= 0.1;
      this.xVel -= 0.1;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.xAcc += 0.1;
      this.xVel += 0.1;
    }

    if (keyIsDown(UP_ARROW)) {
      this.yAcc -= 0.1;
      this.yVel -= 0.1;
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.yAcc += 0.1;
      this.yVel += 0.1;
    }
    
    //wrap position
    if (this.x > 400 + 25) {
      this.x = -25
    } else if (this.x < -25) {
      this.x = 425;
    }
    if (this.y > 400 + 25) {
      this.y = -25
    } else if (this.y < -25) {
      this.y = 425
    }
    this.x = this.x + this.xVel;
    this.y = this.y + this.yVel;
  }

  //draw movement indicating lines  
  drawVectors() {
    strokeWeight(5);
    stroke(180, 100, 0);
    line(this.x, this.y, this.x + (this.xAcc * 600), this.y + (this.yAcc * 600));
    stroke(0, 100, 150);
    line(this.x, this.y, this.x + (this.xVel * 60), this.y + (this.yVel * 60));
  }
  
  //draw according to current position
  display() {
    stroke(0)
    //check if mouse is over eyeball
    if (dist(mouseX, mouseY, this.x, this.y) < 25) {
      fill(255,0,0)
    } else {
      fill(255);
    }
    strokeWeight(1);
    ellipse(this.x, this.y, 50);
    fill(0);
    strokeWeight(0);
    ellipse(this.x, this.y, 20);
  }
}

//Gate class setup
class Gate {
  constructor() {
    this.width =
      this.passed = false
  }
  
  //draw gates with position and states
  display() {

  }
}