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
    backgroundColorR = 20;
    backgroundColorG = 140;
    backgroundColorB = 50;
    clockColorR = 200;
    clockColorG = 230;
    clockColorB = 180;
    textColorR = 8;
    textColorG = 95;
    textColorB = 29;
  } else if (season === 'summer') {
    backgroundColorR = 255;
    backgroundColorG = 198;
    backgroundColorB = 37;
    clockColorR = 255;
    clockColorG = 240;
    clockColorB = 200;
    textColorR = 235;
    textColorG = 149;
    textColorB = 0;
  } else if (season === 'autumn') {
    backgroundColorR = 205;
    backgroundColorG = 90;
    backgroundColorB = 32;
    clockColorR = 240;
    clockColorG = 200;
    clockColorB = 180;
    textColorR = 125;
    textColorG = 64;
    textColorB = 10;
  } else if (season === 'winter') {
    backgroundColorR = 34;
    backgroundColorG = 67;
    backgroundColorB = 158;
    clockColorR = 200;
    clockColorG = 220;
    clockColorB = 255;
    textColorR = 8;
    textColorG = 94;
    textColorB = 55;
  }

  fill(clockColorR,clockColorG,clockColorB);
  noStroke();
  ellipse(0, 0, 500, 500);
  textAlign(CENTER);
  textSize(48);

  // Display season text
  if(mouseIsPressed == true){
  textSize(50);
  fill(textColorR, textColorG, textColorB);
  text(season.toUpperCase(), 0, 0);
  }

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
