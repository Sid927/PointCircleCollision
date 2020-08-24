let pr = 0;
let cx = window.innerWidth / 2;
let cy = window.innerHeight / 2;
let cr = prompt('What would you like to be the radius of your circle');
let hit = false;

const checkCollisionPointCircle = (px, py, pr, cx, cy, cr) => {
  let d = Math.pow(Math.pow((px - cx), 2) + Math.pow((py - cy), 2), 1 / 2);
  if (pr + cr >= d) {
    return true;
  } else {
    return false;
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  hit = false;
  background(255);
  circle(cx, cy, cr * 2);
  point(mouseX, mouseY);
  hit = checkCollisionPointCircle(mouseX, mouseY, pr, cx, cy, cr);
  stroke( (hit) ? color("red"): 0);
  console.log('Colliding: ' + hit)
}
