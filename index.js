let time = 0;
let wave = [];

function setup() {
  createCanvas(900, 800);
}

function draw() {
  let main_radius = 100;
  let dot_radius = 5;
  let circles = 20;
  background(0);

  translate(250, 400);

  fill(0);
  stroke(255);

  // Dot Circle
  let x = 0;
  let y = 0;

  let pre_x = x;
  let pre_y = y;

  for (let i = 0; i < circles; i++) {
    let n = 2 * i + 1;
    let radius = main_radius / n;

    // Main Circle
    beginShape();
    noFill();
    stroke(100);
    ellipse(x, y, radius * 2);
    endShape();

    // x += main_radius * (4 / (n * PI)) * cos(n * time);
    // y += main_radius * (4 / (n * PI)) * sin(n * time);
    pre_x = x;
    pre_y = y;

    x += radius * cos(n * time);
    y += radius * sin(n * time);

    // Dot Circle connector
    stroke(255);
    line(pre_x, pre_y, x, y);

    beginShape();
    ellipse(x, y, dot_radius);
    endShape();
  }

  wave.unshift(y);

  // Wave connector
  line(x, y, 150, wave[0]);

  // Wave
  translate(150, 0);
  beginShape();
  noFill();
  for (let index = 0; index < wave.length; index++) {
    vertex(index, wave[index]);
  }
  endShape();

  time += 0.02;

  if (wave.length > 400) {
    wave.pop();
  }
}
