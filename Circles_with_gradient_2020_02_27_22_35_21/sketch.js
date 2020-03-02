//concentric circle with gradient

function setup() {
  createCanvas(400, 400);

  var w = width;
  //drw concentric circles
  while (w > 0) {
    stroke(0);
    //determine gradient
    grad = map(w, 0, width, 0, 255)
    fill(grad, 50, 100);
    //draw circle
    ellipse(width / 2, height / 2, w, w);
    w = w - 20;
  }
}