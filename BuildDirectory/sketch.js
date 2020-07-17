let pr = 0;
let cx = 300;
let cy = 400;
let cr = 50
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
  console.log(window.innerWidth + ' ' + window.innerHeight);
}

window.addEventListener("resize", setup());

function draw() {
  hit = false;
  background(255);
  circle(cx, cy, cr * 2);
  point(mouseX, mouseY);
  hit = checkCollisionPointCircle(mouseX, mouseY, pr, cx, cy, cr);
  stroke( (hit) ? color("red"): 0);
  console.log('Colliding: ' + hit)
}
