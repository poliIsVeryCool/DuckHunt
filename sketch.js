// Project Title
// Your Name Pilicron
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Declare global variables
let isAlive = true; // allows the duck to be shot
let up = 0; // To help make the wings flap
//TODO #3 Declare and initialize a duckX variable
let duckX = 300
//TODO #3 Declare and initialize a duckY variable
let duckY = 200
// TODO #7 Implement a score system
let scoreValue = 0
// TODO #8 Make the difficulty increase as the score increases
// TODO #9+ Sound? Reload? Dog? More ducks?

function setup() {
  createCanvas(600, 400);
  background(235);
  ellipseMode(CENTER);
  noCursor(); // Turn off the mouse arrow
  frameRate(15);
}

function drawDuck(x, y) {
  // duck body
  noStroke()
  fill("grey");
  ellipse(x, y, 40, 20);
  // duck head
  fill("darkgreen");
  ellipse(x + 20, y - 10, 10, 10);
  // duck wing
  fill("lightgrey");
  arc(x + 5, y, 10, 40, (-1 * 3.14159) / 8 + up, 3.14159 + up);
  // duck beak and feet
  fill("orange");
  ellipse(x + 26, y - 6, 8, 4);
  ellipse(x - 13, y + 12, 6, 6);
  ellipse(x - 8, y + 12, 6, 6);
  // increment flap for wing movement
  if(isAlive) {
  up += PI;
  }
}

function mousePressed() {
  if (dist (mouseX, mouseY, duckX, duckY) <=30) {
    isAlive = false
    scoreValue += 10
    background("red")
  }
  else {
    background("white")
    scoreValue -= 10
  }
  // TODO #6 Write conditional statement or statements
  // that represents whether the mouse position
  // is over the duck body.
  // You can nest if statements or use the && operator
}

function draw() {
  background(235); //redraw the background

  //TODO #1 call the drawDuck function
  drawDuck(duckX, duckY)

  // TODO #2 Draw crosshairs around the mouse
  //    (two crossing lines and a circle around)
  drawCrosshairs();
  // Code to move the duck
  // TODO #4 Write a Conditional statement so
  // that if the duck is alive, it "Flies"
  //                - moves up and across
  moveDuck()
  // TODO #4 Otherwise the duck should move
  // straight down only
  // Also assign 'up' variable the value of 0
  // this will make the wings stop flapping
  // TODO #5 Make the duck re-appear
  // Write a conditional statement so that
  //   if the duck is too high or too low (off canvas),
  //   it respawns to the bottom of the canvas
  text ("score", 10, 390)
  text (scoreValue, 50, 390)
}

function drawCrosshairs() {
  noFill();
  stroke(255, 0, 0)
  circle(mouseX, mouseY, 40);
  line(mouseX - 20, mouseY, mouseX + 20, mouseY);
  line(mouseX, mouseY - 20, mouseX, mouseY + 20)
  stroke(0)
}

function moveDuck() {
  if (isAlive == true) { //flies
    duckX += 5
    duckY -= 5
  }
  else if (isAlive == false) {
    up = 0
    duckY += 5
  }
  if (duckY <= -50 || duckY >= 450 || duckX <= -50 || duckX >= 650) {
    duckX = random (100,300)
    duckY = 450
    isAlive = true
  }
}