// Populate the carousel
const carouselEl = document.getElementById('carousel');
carouselEl.innerHTML = '';

// christmasPhotos comes from christmas-photos.js
christmasPhotos.forEach(photo => {
  const slide = document.createElement('div');
  slide.className = 'carousel-slide';

  const img = document.createElement('img');
  img.src = photo.dataUrl;
  img.alt = photo.alt || '';
  img.className = 'carousel-slide-image';

  slide.appendChild(img);
  carouselEl.appendChild(slide);
});