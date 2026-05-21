// ── Floating hearts in background ──
(function spawnFloatingHearts() {
  const bg = document.getElementById('heartsBg');
  const symbols = ['💜', '🌸', '💕', '✨', '💗'];

  function createHeart() {
    const el = document.createElement('span');
    el.classList.add('heart-float');
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (0.8 + Math.random() * 1.4) + 'rem';
    const dur = 8 + Math.random() * 10;
    el.style.animationDuration = dur + 's';
    el.style.animationDelay = (Math.random() * 5) + 's';
    bg.appendChild(el);
    setTimeout(() => el.remove(), (dur + 5) * 1000);
  }

  for (let i = 0; i < 12; i++) createHeart();
  setInterval(createHeart, 1200);
})();

// ── Confetti ──
function launchConfetti() {
  const wrap = document.getElementById('confettiWrap');
  wrap.innerHTML = '';
  const colors = ['#a78bfa', '#f9a8d4', '#ec4899', '#7c3aed', '#fbbf24', '#fb7185', '#c084fc'];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (6 + Math.random() * 8) + 'px';
    piece.style.height = (6 + Math.random() * 8) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    const dur = 2 + Math.random() * 2;
    piece.style.animationDuration = dur + 's';
    piece.style.animationDelay = (Math.random() * 1.5) + 's';
    wrap.appendChild(piece);
    setTimeout(() => piece.remove(), (dur + 2) * 1000);
  }
}

// ── Surprise button ──
const surpriseBtn = document.getElementById('surpriseBtn');
const overlay     = document.getElementById('surpriseOverlay');
const closeBtn    = document.getElementById('closeBtn');

surpriseBtn.addEventListener('click', () => {
  overlay.classList.add('active');
  launchConfetti();
  document.body.style.overflow = 'hidden';
});

function closeOverlay() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeOverlay);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeOverlay();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeOverlay();
});