var circleRad = 10;
var particleRad = 100;
var starRed = 40;
var active = true;
var particlesPositions = []

function setup() {
  createCanvas(500, 500);
}

function draw() {
  checkContact();
  drawFrame();
}

//check if mouse is inside circle
function checkContact() {
  if (active && dist(mouseX,mouseY,250,250) < circleRad) {
    // ++ to add one to each value
    circleRad++;
    starRed++;
  } else if (active && dist(mouseX,mouseY,250,250) > circleRad) {
    circleRad = 10;
    starRed = 30;
  }
  if (!active && particleRad < 0) {
    active = true;
    particlesPositions = [];
    particleRad = 100;
    starRed = 40;
  } else if (!active && particleRad >= 0) {
    particleRad--;
    circleRad--;
    starRed-=2;
  }
  if (circleRad > width / 2 || circleRad > height / 2) {
    circleRad = 100;
    particleRad = 100;
    active = false;
    for (let i = 0; i < random(30, 40); i++) {
      let x = random(width);
      let y = random(height);
      particlesPositions.push([x,y]);
    }
  }
}

function drawFrame() {
  background(0);
  fill(starRed, 25, 50);
  ellipse(250,250,circleRad*2);
  for (let i = 0; i < particlesPositions.length; i++) {
    ellipse(particlesPositions[i][0], particlesPositions[i][1], particleRad);
  }
}