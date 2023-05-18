let textColorR = 0;
let textColorG = 0;
let textColorB = 0;

let clockColorR = 255;
let clockColorG = 255;
let clockColorB = 255;

let backgroundColorR = 255;
let backgroundColorG = 255;
let backgroundColorB = 255;

function setup() {
  createCanvas(windowWidth, windowHeight); // This is so that the canvas is full screen
  angleMode(DEGREES); // I want my entire code to be working with 360 degrees instead of pi
}

function draw() {
  background(backgroundColorR,backgroundColorG,backgroundColorB);

  translate(windowWidth / 2, windowHeight / 2); // It repositions the 0,0 of the canvas to the middle of my screen

  let hr = hour();
  let mn = minute();
  let sc = second();
  let season = getSeason();

  // Set background color based on the current season
  if (season === 'spring') {
    clockColorR = 200;
    clockColorG = 230;
    clockColorB = 180;
    textColorR = 20;
    textColorG = 140;
    textColorB = 50;
  } else if (season === 'summer') {
    clockColorR = 255;
    clockColorG = 240;
    clockColorB = 200;
    textColorR = 255;
    textColorG = 198;
    textColorB = 37;
  } else if (season === 'autumn') {
    clockColorR = 240;
    clockColorG = 200;
    clockColorB = 180;
    textColorR = 205;
    textColorG = 90;
    textColorB = 32;
  } else if (season === 'winter') {
    clockColorR = 200;
    clockColorG = 220;
    clockColorB = 255;
    textColorR = 34;
    textColorG = 67;
    textColorB = 158;
  }

  fill(clockColorR,clockColorG,clockColorB);
  noStroke();
  ellipse(0, 0, 500, 500);
  textAlign(CENTER);
  textSize(48);

  // Display season text
  textSize(50);
  fill(textColorR, textColorG, textColorB);
  text(season.toUpperCase(), 0, windowHeight/2-50);

  rotate(-90); // To make the starting point from the top (270 degrees) instead of the right (360 degrees)

  let scAngle = map(sc, 0, 60, 0, 360);
  let mnAngle = map(mn, 0, 60, 0, 360);
  let hrAngle = map(hr % 12, 0, 12, 0, 360);

  textSize(50);
  // Draw seconds hand
  push();
  rotate(scAngle);
  strokeWeight(2);
  fill(255, 0, 0); // Red color for seconds hand
  text(sc, 200, 10);
  pop();

  // Draw minutes hand
  push();
  rotate(mnAngle);
  strokeWeight(4);
  fill(0, 0, 255); // Blue color for minutes hand
  text(mn, 125, 10);
  pop();

  // Draw hours hand
  push();
  rotate(hrAngle);
  strokeWeight(6);
  fill(255, 255, 0); // Yellow color for hours hand
  text(hr, 50, 10);
  pop();
}

function mouseClicked() {
  backgroundColorR = random(255);
 backgroundColorG = random(255);
 backgroundColorB = random(255);
}

function getSeason() {
  let mos = month(); // Get the current month

  if (mos >= 3 && mos <= 5) {
    return 'spring';
  } else if (mos >= 6 && mos <= 8) {
    return 'summer';
  } else if (mos >= 9 && mos <= 11) {
    return 'autumn';
  } else {
    return 'winter';
  }
}
