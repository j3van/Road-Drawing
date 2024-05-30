// Canvas Fishing Scene

// Setup canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Animation variables
let cloud1X = 50;
let cloud1Y = 40;
let cloud2X = 150;
let cloud3X = 250;
let cloud2Y = 10;
let sunY = 50;

let skyR = 173;
let skyG = 216;
let skyB = 230;

let fish1X = 220;
let fish1Xspeed = 1;

let poleColor = "gray";

// Track frames gone by
let frame = 0;

// Triggers the start of the animation
requestAnimationFrame(draw);

// Put ALL drawing code in the draw function
function draw() {
  // sky
  ctx.fillStyle = `rgb(${skyR}, ${skyG}, ${skyB})`;
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // update timing
  frame++;

  // sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(75, sunY, 20, 0, 2 * Math.PI);
  ctx.fill();

  // clouds
  let cloud = document.getElementById("cloud");
  ctx.drawImage(cloud, cloud1X, cloud1Y, 75, 50);
  ctx.drawImage(cloud, cloud2X, cloud2Y, 75, 50);
  ctx.drawImage(cloud, cloud3X, 50, 75, 50);

  // Road
  ctx.beginPath();
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 250, cnv.width, 250);

  // Road Line 1
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(0, 320);
  ctx.lineTo(45, 320);
  ctx.stroke();

  // Road Line 2
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(65, 320);
  ctx.lineTo(120, 320);
  ctx.stroke();

  // Road Line 3
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(140, 320);
  ctx.lineTo(205, 320);
  ctx.stroke();

  // Road Line 3
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(225, 320);
  ctx.lineTo(295, 320);
  ctx.stroke();

  // Road Line 4
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(315, 320);
  ctx.lineTo(385, 320);
  ctx.stroke();

  // Skyscaper 1
  drawBuilding(10, 115);

  // Skyscaper 2
  drawBuilding(110, 115);

  // Skyscaper 3
  drawBuilding(210, 115);

  // Skyscaper 4
  drawBuilding(310, 115);

  // ANIMATION
  cloud1X = cloud1X + 1;
  cloud2X += 1;
  cloud3X += 1;
  // When cloud1 exits the RIGHT side of the canvas, move it to the LEFT side of the canvas
  if (cloud1X >= 400) {
    cloud1X = -75;

    // Reappear at a random height
    cloud1Y = Math.random() * 150;
  }

  if (cloud2X >= 400) {
    cloud2X = -75;

    // Reappear at a random height
    cloud1Y = Math.random() * 150;
  }

  // Sunsets behind the buildings
  if (sunY <= 250 && frame >= 200) {
    sunY = sunY + 1; // or sunY++
  }

  // Blue Sky Color: rgb(173, 216, 230)
  // Sunset Color: rgb(255,165,0)

  if (skyR <= 255) {
    skyR++;
  }

  if (skyG >= 165) {
    skyG--;
  }

  if (skyB >= 0) {
    skyB--;
  }

  requestAnimationFrame(draw);
}

//Skyscapers

function drawBuilding(x, y) {
  // Skyscraper 1 (body)
  ctx.beginPath();
  ctx.fillStyle = "darkgrey";
  ctx.fillRect(x, y, 75, 140);

  // Skyscraper 1 (roof)
  ctx.beginPath();
  ctx.fillStyle = "lightgrey";
  ctx.fillRect(x - 8, y - 5, 92, 10);

  // Skyscraper 1 (windows) set 1
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 4, y + 10, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 22, y + 10, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 42, y + 10, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 60, y + 10, 12, 10);
  // Skyscraper 1  windows set 2
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 4, y + 30, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 22, y + 30, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 42, y + 30, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 60, y + 30, 12, 10);

  // Skyscraper 1  windows set 3
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 4, y + 50, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 22, y + 50, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 42, y + 50, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 60, y + 50, 12, 10);

  // Skyscraper 1 windows set 4
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 4, y + 70, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 22, y + 70, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 42, y + 70, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 60, y + 70, 12, 10);

  // Skyscraper 1  windows set 5
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 4, y + 90, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 22, y + 90, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 42, y + 90, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 60, y + 90, 12, 10);

  // Skyscraper 1  windows set 6
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 4, y + 110, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 22, y + 110, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 42, y + 110, 12, 10);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + 60, y + 110, 12, 10);

  // Skyscraper 1 front doors
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(x + 30, y + 130, 15, 10);

  // Skyscaper 1 (side base accents)

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(x, y + 5, 6, 140);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(x + 70, y + 5, 6, 140);
}
