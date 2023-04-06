let cubeSize = 100;
let cubes = [];
let h = 1;
let hAmount = 1e-1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  blendMode("hard-light");

  for (let i = 0; i < floor(windowWidth / cubeSize) + 2; i++) {
    for (let j = 0; j < floor(windowHeight / cubeSize) + 2; j++) {

      cubes.push(new Cube(i * cubeSize, j * cubeSize, cubeSize));

    }
  }
}

function draw() {
  background(20);
  if (h < 0 || h > 255) {
    hAmount *= -1;
  }
  // stroke(h += hAmount, 255, 255);
  // fill(h += hAmount, 255, 255);

  stroke(50, 255, 255);
  fill(45, 255, 255);

  cubes.forEach(cube => cube.march());
}


class Cube {
  constructor(x, y, cubeSize) {
    this.x = x;
    this.y = y;
    this.cubeSize = cubeSize;
    this.angle = 0;
  }

  march = () => {
    push();

    translate(this.x, this.y);

    rotate(this.angle++);

    if (this.angle % 90 == 0) {
      this.angle = 0;
      this.x += this.cubeSize;
    }

    rect(-this.cubeSize, -this.cubeSize, this.cubeSize);

    if (this.x > windowWidth + (sqrt(2) * this.cubeSize)) {
      this.x = 0;
    }
    pop();

  }
}