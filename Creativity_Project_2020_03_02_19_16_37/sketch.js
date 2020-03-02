let specs = 0;
let maxSpecs = 500;

function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(0);
}

function draw() {
  drawSpec();
  specs++
}

function drawSpec() {
  let styles = [NORMAL, ITALIC, BOLD, BOLDITALIC];
  if (specs < maxSpecs) {
    fill(random(255), random(255), random(255));
    let fonts = ['Courier New', 'Georgia', 'Rockwell']
    textFont(random(fonts));
    textSize(random(70));
    textStyle(random(styles));
    let specs = text("Specs", random(-100,400), random(400));
  } else {
    fill(0);
    textFont('Courier New')
    textSize(140)
    textStyle(BOLD)
    text("Specs", -10, 225);
    
  }
}