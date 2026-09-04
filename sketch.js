// Project Title
// Your Name Policron
// Date when ever i want

// Declare global variables
let isAlive = true;
let up1 = 0;
let duckX = 300
let duckXSpeed = 5
let duckY = 200
let duckYSpeed = 5
let scoreValue = 0
let difficulty = 0
let ammo = 3
let lose = false

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
  // duck wings
  fill("lightgrey");
  arc(x + 5, y, 10, 40, (-1 * 3.14159) / 8 + up1, 3.14159 + up1);
  // duck feet & beak
  fill("orange");
  ellipse(x + 26, y - 6, 8, 4);
  ellipse(x - 13, y + 12, 6, 6);
  ellipse(x - 8, y + 12, 6, 6);
  if(isAlive) {
  up1 += PI;
  }
}

function mousePressed() {
  if (dist (mouseX, mouseY, duckX, duckY) <=30&& isAlive == true) {
    isAlive = false
    scoreValue += 10
    background("red")
    ammo -= 1
  }
  else {
    background("white")
    scoreValue -= 10
    ammo -= 1
  }
}

function draw() {
  background("lightblue");
  drawDuck(duckX, duckY)
  drawCrosshairs();
  moveDuck()
  if (scoreValue >= 50) {
    drawDuck(duckX-50, duckY)
  }
  duckX += duckXSpeed
  duckY += duckYSpeed
  fill (0, 200, 0)
  noStroke()
  rect (0, 330, 600, 70)
  fill(0)
  text ("score", 10, 390)     //score text
  text (scoreValue, 50, 390)
  text ("difficulty", 500, 390) //difficulty text
  text (difficulty, 550, 390)
  text ("ammo", 200, 390) //ammo text
  text (ammo, 250, 390)

  if (scoreValue >= 250) {
    difficulty = 8
  }
  else if (scoreValue >= 200) {
    difficulty = 6
  }
  else if (scoreValue >= 150) {
    difficulty = 4
  }
  else if (scoreValue >= 100) {
    difficulty = 2
  }
}

function drawCrosshairs() {
  noFill();
  stroke(0);
  circle(mouseX, mouseY, 40);
  line(mouseX - 20, mouseY, mouseX + 20, mouseY);
  line(mouseX, mouseY - 20, mouseX, mouseY + 20)
}

function moveDuck() {
  if (isAlive == true) {
    duckXSpeed= 4 + difficulty
    duckYSpeed = -4 - difficulty
  }
  else if (isAlive == false) {
    up = 0
    duckXSpeed = 0
    duckYSpeed = 10
  }
  if (duckY <= -50 || duckY >= 450 || duckX <= -50 || duckX >= 650) {
    duckX = random (100,300)
    duckY = 450
    isAlive = true
  }
}
function cloud(x, y) {
  fill("white");
  ellipse(x, y, 30, 20);
  ellipse(x + 15, y - 10, 20, 15);
  ellipse(x - 15, y - 10, 20, 15);
}
