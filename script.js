// Réponses correctes à personnaliser
const bonnesReponses = {
  q1: "rien",
  q2: "01novembre",
  q3: "trois"
};

const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');
const btnLove = document.getElementById('btn-love');
const btnValider = document.getElementById('btn-valider');
const errorMsg = document.getElementById('error-msg');

// Passage écran 1 -> écran 2
btnLove.addEventListener('click', () => {
  screen1.classList.remove('active');
  screen2.classList.add('active');
});

// Vérification des réponses
btnValider.addEventListener('click', () => {
  let correct = true;

  for (const question in bonnesReponses) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (!selected || selected.value !== bonnesReponses[question]) {
      correct = false;
    }
  }

  if (correct) {
    screen2.classList.remove('active');
    screen3.classList.add('active');
    lancerAnimationCoeurs();
  } else {
    errorMsg.style.display = 'block';
  }
});

// Animation de cœurs qui tombent
function lancerAnimationCoeurs() {
  const emojis = ['❤️', '💖', '💕', '💗', '💓'];
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);
}