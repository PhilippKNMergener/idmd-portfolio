var Pop = [1433783.686, 1366417.754, 329064.917, 270625.568, 216565.318, 211049.527, 200963.599, 163046.161, 145872.256, 127575.529, 126860.301, 112078.73, 108116.615, 100388.073, 96462.106];
var Name = ['China', 'India', 'United States', 'Indonesia', 'Pakistan', 'Brazil', 'Nigeria', 'Bangladesh', 'Russia', 'Mexico', 'Japan', 'Ethiopia', 'Philippines', 'Egypt', 'Vietnam'];
var interactID = null;
var centerDist = null;

function setup() {
  createCanvas(550, 550);
}

function draw() {
  background(130);
  checkDist();
  strokeWeight(0.5);
  fill(0);
  stroke(255);
  for (i = 0; i < 15; i++) {
    let rad = map(Pop[i], 0, 1500000, 0, width);
    if (i == interactID) {
      strokeWeight(3);
      fill(30, 50, 30);
      ellipse(width / 2, height / 2, rad + 10);
    } else {
      strokeWeight(0.5);
      ellipse(width / 2, height / 2, rad);
    }
  }
  if(interactID != null) {
    strokeWeight(2);
    fill(255);
    stroke(0);
    textSize(30);
    textAlign(CENTER);
    text(Name[interactID], mouseX, mouseY - 30);
    text("Pop: " + (Pop[interactID] * 1000), mouseX, mouseY);
  }
}

function checkDist() {
  centerDist = dist(width / 2, height / 2, mouseX, mouseY);
  interactID = null;
  for (let i = 0; i < 15; i++) {
    if (centerDist <= map(Pop[i], 0, 1500000, 0, width / 2)) {
      interactID = i;
    }
  }
}