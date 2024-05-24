document.getElementById('celebrateButton').addEventListener('click', function() {
    alert('Happy Birthday! 🎉');
    confettiEffect();
});

function confettiEffect() {
    // Simple confetti effect using JavaScript and CSS
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
