let apple;
let pacMan;
let xDist;
let yDist;
let score = 0;
let size = 25;
let directions = [-1 / 2, 0, 1 / 2, 1];
let mouths = [1 / 4, 3 / 16, 1 / 8, 1 / 16, 0, 1 / 16, 1 / 8, 3 / 16];
let gameStarted = false;

function setup() {
  frameRate(60)
  createCanvas(400, 400);
  apple = new Apple();
  pacMan = new PacMan();
  gameStarted = false;
}

function draw() {
  if (apple.active == true) {
    checkCollision();
  }
  pacMan.updatePos();
  if (frameCount % 6 == 0) {
    pacMan.updateMouth();
  }
  drawFrame();
}

function drawFrame() {
  background(0);
  if (gameStarted) {
    displayScore();
  } else {
    promptText()
  }
  apple.display();
  pacMan.display();

}

function displayScore() {
  textSize(30)
  fill(255)
  text(score, 20, 43.5)
}

function promptText() {
  fill(255)
  textSize(40)
  text("HUNGRY PAC-MAN", 17, 45)
  textSize(20)
  text("*CLICK ANYWHERE TO START*", 46, 120)
}

function mousePressed() {
  if (!gameStarted) {
    gameStarted = true;
  }
  apple.active = true;
  apple.updatePos();
  findPath()
}

function checkCollision() {
  if (pacMan.x == apple.x && pacMan.y == apple.y) {
    score++;
    pacMan.moving = false;
    apple.active = false;
  }
}

function findPath() {
  xDist = apple.x - pacMan.x;
  yDist = apple.y - pacMan.y;
  if (abs(xDist) > abs(yDist)) {
    if (xDist > 0) {
      pacMan.favoredDir = 1;
    } else {
      pacMan.favoredDir = 3
    }
  } else {
    if (yDist > 0) {
      pacMan.favoredDir = 2;
    } else {
      pacMan.favoredDir = 0;
    }
  }
}

class Apple {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.active = false;
    this.D = size / 3;
  }
  updatePos() {
    this.x = mouseX;
    this.y = mouseY;
  }
  display() {
    if (this.active) {
      fill(161, 10, 10);
      ellipse(this.x, this.y, this.D, this.D);
    }
  }
}

class PacMan {
  constructor() {
    this.D = size;
    this.mouth = 3;
    this.x = 200;
    this.y = 200;
    this.direction = 1;
    this.speed = 1;
    this.moving = false;
  }
  updateMouth() {
    if (this.moving) {
      if (this.mouth >= 7) {
        this.mouth = 0;
      } else {
        this.mouth += 1;
      }
    } else {
      this.mouth = 4;
    }
  }
  updatePos() {
    if (apple.active) {
      if ((this.favoredDir == 1 || this.favoredDir == 3) && this.x != apple.x) {
        if (this.favoredDir == 1) {
          this.moving = true;
          this.direction = 1;
          this.x += this.speed;
        } else {
          this.moving = true;
          this.direction = 3;
          this.x -= this.speed;
        }
      } else if ((this.favoredDir == 0 || this.favoredDir == 2) && this.y != apple.y) {
        if (this.favoredDir == 0) {
          this.moving = true;
          this.direction = 0;
          this.y -= this.speed;
        } else {
          this.moving = true;
          this.direction = 2;
          this.y += this.speed;
        }
      } else {
        if (this.x < apple.x) {
          this.direction = 1;
          this.x += this.speed;
        } else if (this.x > apple.x) {
          this.direction = 3;
          this.x -= this.speed;
        } else if (this.y < apple.y) {
          this.direction = 2;
          this.y += this.speed;
        } else if (this.y > apple.y) {
          this.direction = 0;
          this.y -= this.speed;
        }
      }
    }
  }
  display() {
    if (this.moving) {
      strokeWeight(0);
      fill(240, 190, 0);
      arc(this.x, this.y, this.D, this.D, PI * mouths[this.mouth] + directions[this.direction] * PI, -PI * mouths[this.mouth] + directions[this.direction] * PI);
      fill(0);
      this.eyeD = this.D / 5;
      if (this.direction == 0) {
        this.eyeX = this.x - (this.D / 5);
        this.eyeY = this.y + (this.D / 10);
      } else if (this.direction == 1) {
        this.eyeX = this.x - (this.D / 10);
        this.eyeY = this.y - (this.D / 5);
      } else if (this.direction == 2) {
        this.eyeX = this.x + (this.D / 5);
        this.eyeY = this.y - (this.D / 10);
      } else if (this.direction == 3) {
        this.eyeX = this.x + (this.D / 10);
        this.eyeY = this.y - (this.D / 5);
      }
      ellipse(this.eyeX, this.eyeY, this.eyeD);
    } else {
      fill(240, 190, 0);
      ellipse(this.x, this.y, this.D, this.D)
      this.leftEyeX = this.x - (this.D / 5);
      this.leftEyeY = this.y - (this.D / 8);
      this.rightEyeX = this.x + (this.D / 5);
      this.rightEyeY = this.y - (this.D / 8);
      fill(0)
      this.eyeD = this.D / 8;
      ellipse(this.leftEyeX, this.leftEyeY, this.eyeD);
      ellipse(this.rightEyeX, this.rightEyeY, this.eyeD);
      strokeWeight(this.D / 20)
      line(this.x - (this.D / 2) + (this.D / 7.5), this.y + (this.D / 10), this.x + (this.D / 2) - (this.D / 7.5), this.y + (this.D / 10));
    }
  }
}