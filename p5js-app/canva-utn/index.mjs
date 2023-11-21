import p5 from "p5";

function createCanvasWithEffect1(containerId) {
  new p5((p) => {
    let particles = [];

    const NUM_PARTICLES = 100;

    p.setup = () => {
      let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent(containerId);

      initializeParticles();
    };

    p.draw = () => {
      p.background(0);

      for (let particle of particles) {
        particle.update();
        particle.display();
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    function initializeParticles() {
      for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push(new Particle(p.random(p.width), p.random(p.height)));
      }
    }

    class Particle {
      constructor(x, y) {
        this.position = p.createVector(x, y);
        this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
        this.radius = 10;
        this.color = p.color(p.random(255), p.random(255), p.random(255));
      }

      update() {
        this.position.add(this.velocity);

        if (this.position.x > p.width || this.position.x < 0) {
          this.velocity.x *= -1;
        }

        if (this.position.y > p.height || this.position.y < 0) {
          this.velocity.y *= -1;
        }
      }

      display() {
        p.noStroke();
        p.fill(this.color);
        p.ellipse(
          this.position.x,
          this.position.y,
          this.radius * 2,
          this.radius * 2
        );
      }
    }
  });
}

function createCanvasWithEffect2(containerId) {
  new p5((p) => {
    p.setup = () => {
      let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent(containerId);
      p.background(0);
    };

    p.draw = () => {
      drawText();
    };

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    function drawText() {
      let x = p.mouseX;
      let y = p.mouseY;

      if (p.mouseIsPressed) {
        p.background(p.random(255), p.random(255), p.random(255));
        p.fill(255);
        p.textSize(80);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("AAAAAAAAAAAAA", x, y);
      } else {
        p.background(0);
        p.fill(255);
        p.textSize(80);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("Haz click", x, y);
      }
    }
  });
}

function createCanvasWithEffect3(containerId) {
  new p5((p) => {
    p.setup = () => {
      let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent(containerId);
    };

    p.draw = () => {
      drawBackground();
      drawShapes();
    };

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    function drawBackground() {
      let backgroundColor = p.map(p.mouseX, 0, p.width, 0, 255);
      p.background(backgroundColor);
    }

    function drawShapes() {
      p.fill(backgroundColor);
      p.noStroke();
      p.ellipse(p.mouseX, p.mouseY, 50, 50);

      p.stroke(255);
      p.strokeWeight(4);
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);

      p.fill(255);
      p.noStroke();
      let shapeSize = 30;
      let shapeX = p.noise(p.frameCount * 0.01) * p.width;
      let shapeY = p.noise(p.frameCount * 0.02) * p.height;
      p.ellipse(shapeX, shapeY, shapeSize, shapeSize);
    }
  });
}

export {
  createCanvasWithEffect1,
  createCanvasWithEffect2,
  createCanvasWithEffect3,
};
