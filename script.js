let currentIndex = 0;
const images = document.querySelectorAll(".carousel__image");
const btnLeft = document.querySelector(".carousel__btn--left");
const btnRight = document.querySelector(".carousel__btn--right");
const dots = document.querySelectorAll(".carousel__dot");

function updateCarousel() {
    images.forEach((img, index) => {
        if (index === currentIndex) {
            img.style.opacity = "1";
            img.style.visibility = "visible";
            img.style.transform = "translateX(0)";
        } else {
            img.style.opacity = "0";
            img.style.visibility = "hidden";
            img.style.transform = "translateX(100%)";
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });

    btnLeft.classList.toggle("hidden", currentIndex === 0);
    btnRight.classList.toggle("hidden", currentIndex === images.length - 1);
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function goToImage(index) {
    currentIndex = index;
    updateCarousel();
}

updateCarousel();
