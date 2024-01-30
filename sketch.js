function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 0, 255);
  ellipse(width/2, width/2, 300, 300);
  ellipse(mouseX, mouseY, 100, 100);
}
