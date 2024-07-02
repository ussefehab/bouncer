document.addEventListener('DOMContentLoaded', () => {
  // Select the counter display and the increment/decrement buttons
  const counterValue = document.getElementById('counter-value');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  
  // Initialize the counter value
  let counter = 1;

  // Function to update the displayed counter value
  function updateDisplay() {
      counterValue.textContent = counter;
  }
  
  // Event listener for the decrement button
  decrementButton.addEventListener('click', () => {
      // Only decrement if the counter is greater than 1
      if(counter > 1) {
          counter--;
          updateDisplay(); // Update the display after decrementing
      }
  });
  
  // Event listener for the increment button
  incrementButton.addEventListener('click', () => {
      counter++;
      updateDisplay(); // Update the display after incrementing
  });

  // Initial display update
  updateDisplay();
});
