const container = document.querySelector('.comparison-slider');
const afterImage = document.getElementById('afterImage');
const handle = document.getElementById('handle');

let isDragging = false;

function moveSlider(clientX) {
    const rect = container.getBoundingClientRect();
    let percentage = ((clientX - rect.left) / rect.width) * 100;
    
    // Clamp between 5% and 95%
    percentage = Math.max(5, Math.min(95, percentage));
    
    afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    handle.style.left = `${percentage}%`;
}

container.addEventListener('mousedown', (e) => {
    isDragging = true;
    moveSlider(e.clientX);
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) moveSlider(e.clientX);
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Touch support for mobile
container.addEventListener('touchstart', (e) => {
    isDragging = true;
    moveSlider(e.touches[0].clientX);
});

document.addEventListener('touchmove', (e) => {
    if (isDragging) moveSlider(e.touches[0].clientX);
});

document.addEventListener('touchend', () => {
    isDragging = false;
});
