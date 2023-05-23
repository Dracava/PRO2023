let r = 0;
let g = 0;
let b = 0;

let hourR = 0;
let hourG = 0;
let hourB = 0;

let minuteR = 0;
let minuteG = 0;
let minuteB = 0;

let secondR = 0;
let secondG = 0;
let secondB = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); //this is so that the canvas is full screen
}

function draw() {
  background(r, g, b);

  let hr = nf(hour(), 2, 0);
  let mn = nf(minute(), 2, 0);
  let sc = nf(second(), 2, 0);
  let m = month();

  let secondX = 0.75 * windowWidth;
  let minuteX = 0.5 * windowWidth;
  let hourX = 0.25 * windowWidth;

  fill(255);

  noStroke();
  fill(hourR, hourG, hourB);
  rect(hourX - 150, 0, 300, map(hr, 0, 24, 0, height));
  fill(minuteR, minuteG, minuteB);
  rect(minuteX - 100, 0, 200, map(mn, 0, 60, 0, height));
  fill(secondR, secondG, secondB);
  rect(secondX - 50, 0, 100, map(sc, 0, 60, 0, height));

  fill(0);
  text(hr, hourX - 5, map(hr, 0, 24, 0, height) - 20);
  text(mn, minuteX - 5, map(mn, 0, 60, 0, height) - 20);
  text(sc, secondX - 5, map(sc, 0, 60, 0, height) - 20);

  //Spring - colors are green
  if (m => 4 && m < 6) {
    if (hr => 6 && hr < 12) {
      r = 102;
      g = 255;
      b = 138;
    } else if (hr => 12 && hr < 18) {
      r = 33;
      g = 214;
      b = 75;
    } else if (hr => 18 && hr < 24) {
      r = 20;
      g = 118;
      b = 43;
    } else if (hr => 0 && hr < 6) {
      r = 17;
      g = 42;
      b = 23;
    }
  }
  //Summer - colors are yellow
  else if (m => 4 && m < 6) {
    if (hr => 6 && hr < 12) {
      r = 255;
      g = 252;
      b = 162;
    } else if (hr => 12 && hr < 18) {
      r = 245;
      g = 235;
      b = 0;
    } else if (hr => 18 && hr < 24) {
      r = 255;
      g = 169;
      b = 43;
    } else if (hr => 0 && hr < 6) {
      r = 93;
      g = 57;
      b = 4;
    }
  }
  //Fall - colors are red
  else if (m => 4 && m < 6) {
    if (hr => 6 && hr < 12) {
      r = 255;
      g = 163;
      b = 82;
    } else if (hr => 12 && hr < 18) {
      r = 245;
      g = 20;
      b = 20;
    } else if (hr => 18 && hr < 24) {
      r = 130;
      g = 20;
      b = 20;
    } else if (hr => 0 && hr < 6) {
      r = 47;
      g = 0;
      b = 0;
    }
  }
  //Winter - colors are blue
  else if (m => 4 && m < 6) {
    if (hr => 6 && hr < 12) {
      r = 82;
      g = 209;
      b = 255;
    } else if (hr => 12 && hr < 18) {
      r = 20;
      g = 185;
      b = 245;
    } else if (hr => 18 && hr < 24) {
      r = 9;
      g = 113;
      b = 150;
    } else if (hr => 0 && hr < 6) {
      r = 1;
      g = 40;
      b = 54;
    }
  }
}

function mousePressed() {
  hourR = random(255);
  hourG = random(255);
  hourB = random(255);

  minuteR = random(255);
  minuteG = random(255);
  minuteB = random(255);

  secondR = random(255);
  secondG = random(255);
  secondB = random(255);
}
