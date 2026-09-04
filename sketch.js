// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Declare global variables
let isAlive = true; // allows the duck to be shot
let up = 0; // To help make the wings flap
//TODO #3 Declare and initialize a duckX variable

//TODO #3 Declare and initialize a duckY variable

// TODO #7 Implement a score system
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
  up += 3.14159;
}

function mousePressed() {
  // TODO #6 Write conditional statement or statements
  // that represents whether the mouse position
  // is over the duck body.
  // You can nest if statements or use the && operator
}

function draw() {
  background(235); //redraw the background

  //TODO #1 call the drawDuck function

  fill(0, 0, 0, 0); // transparent

  // TODO #2 Draw crosshairs around the mouse
  //    (two crossing lines and a circle around)

  // Code to move the duck
  // TODO #4 Write a Conditional statement so
  // that if the duck is alive, it "Flies"
  //                - moves up and across

  // TODO #4 Otherwise the duck should move
  // straight down only
  // Also assign 'up' variable the value of 0
  // this will make the wings stop flapping

  // TODO #5 Make the duck re-appear
  // Write a conditional statement so that
  //   if the duck is too high or too low (off canvas),
  //   it respawns to the bottom of the canvas
  
}
