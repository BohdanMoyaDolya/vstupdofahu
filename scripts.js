// Popup Modal
const gridItems = document.querySelectorAll('.grid-item');
const modal = document.getElementById('popup-modal');
const closeModal = modal.querySelector('.close-button');
const popupContent = modal.querySelector('.popup-content');  // Reference to the popup content

// Set the background image for each grid item dynamically from data-bg attribute
gridItems.forEach(item => {
    const imagePath = item.getAttribute('data-bg');
    item.style.backgroundImage = `url('${imagePath}')`; // Set the background image for grid items
});

// Add event listener to each grid item for opening the modal
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the image path, year, title, and description from the data attributes
        const imagePath = item.getAttribute('data-bg');
        const year = item.getAttribute('data-year');
        const title = item.getAttribute('data-title');
        const description = item.getAttribute('data-description');

        // Set the background image for the content inside the popup
        popupContent.style.backgroundImage = `url('${imagePath}')`;

        // Set the year, title, and description text for the popup
        document.getElementById('popup-year').textContent = year;
        document.getElementById('popup-title').textContent = title;
        document.getElementById('popup-description').textContent = description;

        // Show the modal
        modal.classList.add('active');
    });
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close the modal when clicking outside of the content area
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
