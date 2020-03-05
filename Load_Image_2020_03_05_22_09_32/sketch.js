// 400 × 320
var cat;
var catWidth = 100;

function preload() {
  cat = loadImage("swiftLogo.jpg");
}

function setup() {
  createCanvas(500, 500);
  background(255);
}

function mousePressed() {
  background(255);
  image(cat, mouseX, mouseY, catWidth * 1.5, catWidth);
}
