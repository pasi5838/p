
let confettiCanvas = document.getElementById('confetti');
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;
let ctx = confettiCanvas.getContext('2d');
let particles = [];

function createParticles() {
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      size: Math.random() * 8 + 2,
      speed: Math.random() * 5 + 2,
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  particles.forEach((p) => {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
    p.y += p.speed;
    if (p.y > confettiCanvas.height) {
      p.y = -10;
    }
  });
}

let confettiInterval;
function startConfetti() {
  createParticles();
  confettiInterval = setInterval(drawParticles, 30);
}

function stopConfetti() {
  clearInterval(confettiInterval);
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}
