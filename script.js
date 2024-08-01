const images = [
    'https://wallpapers.com/images/high/small-phone-foekvgruabgyuvxx.webp',
    'https://wallpapers.com/images/featured/small-phone-il5y6prv1019arw0.jpg',
    'https://wallpapers.com/images/high/small-phone-ftzds0duyyo86911.webp',
    'https://wallpapers.com/images/high/small-phone-3eg7x52u4vphh6s9.webp',
    'https://wallpapers.com/images/high/small-phone-b0apaldzkpukek2q.webp'
];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showImage(index) {
    galleryImage.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        galleryImage.src = images[index];
        galleryImage.style.opacity = 1; // Fade in effect
    }, 500);
}

function showPrevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

function showNextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

// Initially show the first image
showImage(currentIndex);
