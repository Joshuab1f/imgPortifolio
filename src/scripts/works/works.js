// Lightbox
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const prevBtn = lightbox.querySelector('.prev');
const nextBtn = lightbox.querySelector('.next');

let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'flex';
    });
});

function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxImg) {
    lightbox.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
    if (e.key === "Escape") {
        lightbox.style.display = 'none';
    } else if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    }
    }
});

// Scroll Reveal das imagens
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50;
}

const galleryImages = document.querySelectorAll('.gallery img');

function revealImages() {
    galleryImages.forEach(img => {
    if (isInViewport(img)) {
        img.classList.add('show');
    }
    });
}

window.addEventListener('scroll', revealImages);
window.addEventListener('load', revealImages);