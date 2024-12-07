// Fetch the JSON file and populate the carousel
fetch('data/photos-past-christmases.json')
.then(response => response.json())
.then(images => {
    const carousel = document.getElementById('carousel');
    images.forEach(image => {
        const item = document.createElement('div');
        item.className = 'carousel-slide';
        item.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" class="carousel-slide-image">
            <caption>${image.caption}</caption>
            `;
            carousel.appendChild(item);
    });
})
.catch(error => console.error('Error loading images:', error));