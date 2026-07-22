// Scroll cue -> jump to gift section
document.getElementById('scrollCue').addEventListener('click', () => {
  document.querySelector('.gift-section').scrollIntoView({ behavior: 'smooth' });
});

// Gift open / close interaction
const giftBox = document.getElementById('giftBox');
const giftSection = document.querySelector('.gift-section');
const messageCard = document.getElementById('messageCard');
const replayBtn = document.getElementById('replayBtn');

function openGift() {
  giftBox.classList.add('is-open');
  giftSection.classList.add('is-open');
  messageCard.classList.add('is-visible');
  launchConfetti();
}

function closeGift() {
  giftBox.classList.remove('is-open');
  giftSection.classList.remove('is-open');
  messageCard.classList.remove('is-visible');
}

giftBox.addEventListener('click', () => {
  if (giftBox.classList.contains('is-open')) return;
  openGift();
});

replayBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  closeGift();
});

// Lightweight confetti burst
const confettiColors = ['#e07a3e', '#f0b25a', '#c14a34', '#faf1e2'];
const confettiLayer = document.getElementById('confettiLayer');

function launchConfetti() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const pieces = 34;
  for (let i = 0; i < pieces; i++) {
    const el = document.createElement('span');
    el.className = 'confetti-piece';

    const size = 6 + Math.random() * 6;
    const duration = 2.6 + Math.random() * 1.6;
    const delay = Math.random() * 0.3;

    el.style.left = Math.random() * 100 + 'vw';
    el.style.width = size + 'px';
    el.style.height = size * 0.4 + 'px';
    el.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = delay + 's';

    confettiLayer.appendChild(el);
    setTimeout(() => el.remove(), (duration + delay) * 1000 + 200);
  }
}
