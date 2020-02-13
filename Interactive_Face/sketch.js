/*  Originally created by Alysse Galo
    Modified by Susan Evans
    Modified by Chandru Narayan
    Last edited 02/06/2020
    
    Draws a bald man, that "sings" to music
*/

// holds the audio input object
var mic;
// holds the current volume
var vol;

function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
  
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  mic.start();
}

function draw() {
  background(255);
  // Get the overall volume (between 0 and 1.0)
  vol = mic.getLevel();
  
  if (vol > 0.01) {
    background(random(255), random(255), random(255));
  }
  allHair();
  ears();
  head();
  eyebrows();
  nose();
  bowtie(); 
  eyes(); 
  mouth();
}

function allHair() {
  hair(128, 235);
  hair(373, 235);
}
// Raise hair reacting to sound!
function hair(x, y) {
  var adjustedVol = map(vol, 0, 1, 0, 200);
  fill(0);
  ellipse(x, y, 50 + adjustedVol, 80 + adjustedVol);
}

function ears() {
  ear(135, 295);
  ear(367, 295);
}

function ear(x, y) {
  var adjustedVol = map(vol, 0, 1, 0, 200);
  noStroke();
  fill(243, 205, 159);
  ellipse(x, y, 50 + adjustedVol, 50 + adjustedVol);
  
  fill(234, 184, 125);
  ellipse(x, y, 30 + adjustedVol, 30 + adjustedVol);
}

function head() {
  noStroke();
  strokeWeight(2);
  fill(243, 205, 159);
  ellipse(250, 250, 250, 250);
}

function eyes() {
  eye(196, 224);
  eye(300, 224);
}

function eye(x, y) {
  var adjustedVol = map(vol, 0, 1, 0, 10);
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255);
  ellipse(x, y, 50 + adjustedVol, 30 + adjustedVol);
  
  noStroke();
  fill(0);
  ellipse(x, y, 30 + adjustedVol, 30 + adjustedVol);
   
  if (vol > 0.01) {
    fill(random(255), random(255), random(255));
  } else {
    fill(255);
  }

  ellipse(x + 9, y, 10 + adjustedVol, 10 + adjustedVol);
}

function nose() {
  stroke(0);
  strokeWeight(2);
  line(248, 224, 248, 281);
  
  nostril(264, 281);
  nostril(232, 281);
}

function nostril(x, y) {
  stroke(0);
  strokeWeight(1);
  fill(242, 205, 153);
  ellipse(x, y, 20, 10);
}

// Make face sing by using the vol variable and map function
function mouth() {
  var adjustedVol = map(vol, 0, 1, 0, 1000);
  noStroke();
  fill(242, 159, 159);
  ellipse(249, 325, 40 + adjustedVol, 10 + adjustedVol);
  fill(0);
  ellipse(249, 325, 30 + adjustedVol, 5 + adjustedVol);
}

function bowtie() {
  if (vol > 0.01) {
    fill(random(255), random(255), random(255));
  } else {
    fill(234, 28, 46);
  }
  rect(230, 380, 40, 30, 10);
  triangle(190, 366, 250, 396, 190, 420);
  triangle(308, 368, 250, 396, 308, 420);
}

function eyebrows() {
  eyebrow(279, 180);
  eyebrow(180, 180);
}

function eyebrow(x, y) {
  var adjustedVol = map(vol, 0, 1, 0, 400);
  stroke(0);
  strokeWeight(2 + adjustedVol);
  fill(255, 255, 255);
  line(x, y, x + 37, y);
}