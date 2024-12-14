// Select the button by its ID
const animateButton = document.getElementById('animateButton');

button.addEventListener('click', () => {
    // Change button color during animation
    button.classList.add('active');

    // Create image element
    const overlayImage = document.createElement('img');
    overlayImage.id = 'overlayImage';
    overlayImage.src = 'ZelVel.jpg'; // Replace with your image URL
    document.body.appendChild(overlayImage);

    // Start animation
    requestAnimationFrame(() => {
        overlayImage.style.transform = 'translateY(-50%) translateX(100vw)';
    });

    // Remove image after animation
    setTimeout(() => {
        button.classList.remove('active');
        overlayImage.remove();
    }, 3000); // Match the duration of the animation
});