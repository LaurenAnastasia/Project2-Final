let clock;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  

  clock = new Clock();
}

function draw() {
  background(0, 0, 0, 0);
  translate(200, 200);
  rotate(-90);
  clock.update();
  clock.display();
 
}