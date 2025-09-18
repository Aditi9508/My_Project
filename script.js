// script.js
const noBtn = document.getElementById('move-random');

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * window.innerWidth);
    const j = Math.floor(Math.random() * window.innerHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
