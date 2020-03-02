let specs = 0;
let maxSpecs = 500;
let drawing = true;

function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(0);
}

function draw() {
  if (drawing == true) {
    drawSpec();
  }
}

function drawSpec() {
  let styles = [NORMAL, ITALIC, BOLD, BOLDITALIC];
  if (specs < maxSpecs) {
    fill(random(255), random(255), random(255));
    let fonts = ['Courier New', 'Georgia', 'Rockwell']
    textFont(random(fonts));
    textSize(random(70));
    textStyle(random(styles));
    let specs = text("Specs", random(-100, 400), random(400));
  } else {
    fill(0);
    textFont('Courier New')
    textSize(140)
    textStyle(BOLD)
    text("Specs", -10, 225);
    drawing = false;
    r = createButton('reset');
    r.position((width / 2) - 50, 2 * (height / 3));
    r.size(80,30);
    r.mousePressed(reset);
  }
  specs++
}

function reset() {
  background(255);
  specs = 0;
  drawing = true;
  r.position(-100,-100);
}
