// Carousel
let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide');
    
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    console.log(slides)
    console.log(currentIndex)

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}