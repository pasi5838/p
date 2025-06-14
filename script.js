
const questions = [
  { question: "Hewan apa yang suka makan wortel?", answer: "kelinci" },
  { question: "Hewan apa yang bertubuh besar dan suka berendam di lumpur?", answer: "badak" },
  { question: "Hewan apa yang melompat-lompat dan membawa anaknya di kantong?", answer: "kanguru" },
  { question: "Hewan apa yang hidup di laut dan punya tentakel?", answer: "gurita" },
  { question: "Hewan apa yang punya belalai?", answer: "gajah" }
];
let current = 0;
let lives = 3;

function updateQuestion() {
  if (current >= questions.length) {
    document.getElementById("question").textContent = "Kamu menang!";
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("restartBtn").style.display = "inline";
    return;
  }
  document.getElementById("question").textContent = questions[current].question;
  document.getElementById("answerInput").value = "";
}

document.getElementById("submitBtn").addEventListener("click", () => {
  const input = document.getElementById("answerInput").value.toLowerCase().trim();
  if (input === questions[current].answer) {
    startConfetti();
    setTimeout(() => {
      stopConfetti();
      current++;
      updateQuestion();
    }, 1000);
  } else {
    lives--;
    document.getElementById("lives").textContent = "❤️".repeat(lives);
    if (lives <= 0) {
      document.getElementById("question").textContent = "Game Over!";
      document.getElementById("submitBtn").style.display = "none";
      document.getElementById("restartBtn").style.display = "inline";
    }
  }
});

document.getElementById("restartBtn").addEventListener("click", () => {
  current = 0;
  lives = 3;
  document.getElementById("lives").textContent = "❤️❤️❤️";
  document.getElementById("submitBtn").style.display = "inline";
  document.getElementById("restartBtn").style.display = "none";
  updateQuestion();
});

updateQuestion();
