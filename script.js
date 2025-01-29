// Mini-Game Script
let fryCount = 0;
const airFryer = document.getElementById('air-fryer');
const fryCountDisplay = document.getElementById('fry-count');

airFryer.addEventListener('click', () => {
  fryCount++;
  fryCountDisplay.textContent = `$FRY Cooked: ${fryCount}`;
  airFryer.style.transform = 'scale(0.95)';
  setTimeout(() => {
    airFryer.style.transform = 'scale(1)';
  }, 100);
});
