document.addEventListener('DOMContentLoaded', () => {
  // Select all slides, the main slider container, and the navigation arrows
  const slides = document.querySelectorAll(".carousel__flex");
  const slider = document.querySelector(".carousel");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  // Calculate the maximum slide index and initialize the current slide index
  const maxSlide = slides.length - 1;
  let slideInterval;
  let curSlide = 0;

  // Hide overflow content in the slider container
  slider.style.overflow = "hidden";

  // Position each slide side by side horizontally
  slides.forEach((s, i) => {
      s.style.transform = `translateX(${i * 200}%)`;
  });

  // Function to move to a specific slide
  const goToSlide = (slide) => {
      slides.forEach((s, i) => {
          s.style.transform = `translateX(${(i - slide) * 200}%)`;
      });
  };

  // Initialize the slider to show the first slide
  goToSlide(0);

  // Function to move to the next slide
  const nextSlide = () => {
      if (curSlide === maxSlide) {
          curSlide = 0; // Reset to the first slide if at the end
      } else {
          curSlide++; // Move to the next slide
      }
      goToSlide(curSlide); // Update the slide position
  };

  // Function to move to the previous slide
  const prevSlide = () => {
      if (curSlide === 0) {
          curSlide = maxSlide; // Move to the last slide if at the beginning
      } else {
          curSlide--; // Move to the previous slide
      }
      goToSlide(curSlide); // Update the slide position
  };

  // Function to start the automatic sliding of slides every 3 seconds
  const startSlider = () => {
      slideInterval = setInterval(() => {
          nextSlide(); // Move to the next slide at intervals
      }, 5000); // Change slide every 3 seconds
  };

  // Event listener for the right arrow button
  arrowRight.addEventListener('click', () => {
      clearInterval(slideInterval); // Clear the interval to stop automatic sliding
      nextSlide(); // Move to the next slide
      startSlider(); // Restart the automatic sliding
  });

  // Event listener for the left arrow button
  arrowLeft.addEventListener('click', () => {
      clearInterval(slideInterval); // Clear the interval to stop automatic sliding
      prevSlide(); // Move to the previous slide
      startSlider(); // Restart the automatic sliding
  });

  // Event listener to pause automatic sliding when the mouse is over the slider
  slider.addEventListener('mouseover', () => {
      clearInterval(slideInterval); // Clear the interval to stop automatic sliding
  });

  // Event listener to resume automatic sliding when the mouse leaves the slider
  slider.addEventListener('mouseout', () => {
      startSlider(); // Restart the automatic sliding
  });

  // Start the automatic slider
  startSlider();
});
