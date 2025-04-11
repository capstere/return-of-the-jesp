const startBtn = document.getElementById('start-btn');
const introText = document.getElementById('intro-text');
const logoContainer = document.getElementById('logo-container');
const music = document.getElementById('music');
const planet = document.getElementById('planet');
const titles = document.getElementById('titles');
const finalText = document.getElementById('final-text');
const soundButtons = document.getElementById('sound-buttons');
const countdownEl = document.getElementById('countdown');

const sounds = [
  document.getElementById('sound1'),
  document.getElementById('sound2'),
  document.getElementById('sound3'),
  document.getElementById('sound4')
];

startBtn.addEventListener('click', () => {
  document.getElementById('start-screen').style.display = 'none';

  introText.style.opacity = 1;
  setTimeout(() => { introText.style.opacity = 0; }, 4000);

  setTimeout(() => {
    logoContainer.style.opacity = 1;
    music.play();
  }, 4000);

  setTimeout(() => {
    titles.style.display = 'block';
  }, 7000);

  setTimeout(() => {
    document.getElementById('planet-container').classList.add('show-planet');
  }, 30000);

  setTimeout(() => {
    finalText.style.display = 'block';
  }, 40000);

  setTimeout(() => {
    soundButtons.style.display = 'block';
  }, 42000);
});

// Sound buttons
document.querySelectorAll('.sound-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const sound = document.getElementById(btn.dataset.sound);
    sound.play();
  });
});

// Countdown till 2025-05-01
const targetDate = new Date('2025-05-01T00:00:00');
setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownEl.textContent = `Nedräkning: ${days} dagar kvar`;
}, 1000);