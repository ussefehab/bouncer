// Select all card slides and the main slider container
const cardSlides = document.querySelectorAll(".card-slider__pos");
const slider = document.querySelector(".card-slider");

// Select the recommendations container
const recContainer = document.querySelector(".best-seller-card__slider--container");

// Initialize the current slide index and calculate the maximum index
let curCardSlide = 0;
const maxCardSlide = cardSlides.length - 1;

// Hide overflow content in the slider container
slider.style.overflow = "hidden";

// Function to create recommendation dots for each slide
const createRecs = () => {
    cardSlides.forEach((_, i) => {
        recContainer.insertAdjacentHTML('beforeend', `<div class="best-seller-card__slider" data-slide="${i}">`);
    });
};

// Function to activate the recommendation dot for the current slide
const activeRecs = (slide) => {
    recContainer.querySelectorAll(".best-seller-card__slider").forEach((rec, i) => {
        rec.classList.remove("best-seller-card__slider--active");
        if (i === slide) {
            rec.classList.add("best-seller-card__slider--active");
        }
    });
};

// Create recommendation dots for each slide
createRecs();

// Position each slide side by side horizontally
cardSlides.forEach((s, i) => {
    s.style.transform = `translateX(${i * 100}%)`;
});

// Function to move to a specific slide
const goToSlideCard = (slide) => {
    cardSlides.forEach((s, i) => {
        s.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
};

// Initialize the slider to show the first slide and activate the first recommendation dot
goToSlideCard(0);
activeRecs(0);

// Function to move to the next slide
const nextCardSlide = () => {
    if (curCardSlide === maxCardSlide) {
        curCardSlide = 0; // Reset to the first slide if at the end
    } else {
        curCardSlide++; // Move to the next slide
    }
    goToSlideCard(curCardSlide); // Update the slide position
    activeRecs(curCardSlide); // Update the active recommendation dot
};

// Function to start the automatic sliding of cards every 3 seconds
const startCardSlider = () => {
    setInterval(() => {
        nextCardSlide(); // Move to the next slide at intervals
    }, 3000); // Change slide every 3 seconds
};

// Start the card slider
startCardSlider();
