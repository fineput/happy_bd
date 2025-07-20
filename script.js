function showConfetti() {
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#8B0000', '#FF0000', '#FFFACD']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#8B0000', '#FF0000', '#FFFACD']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
