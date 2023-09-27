let currentSlide = document.getElementById('beforeSlide');
let nextSlide = document.getElementById('afterSlide');

document.querySelector('.carousel').addEventListener('click', () => {
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
    
    let temp = currentSlide;
    currentSlide = nextSlide;
    nextSlide = temp;
});
