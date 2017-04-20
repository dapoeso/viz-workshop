function setup() {
  createCanvas(640, 480);
}


function draw() {

  if (mouseIsPressed) {
    fill(0);
  } else {
    stroke(255, 255, 255, 25);
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  }
  rect(mouseX,mouseY,50,50);
}
