document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const rangeLeft = document.getElementById('range-left');
  const rangeRight = document.getElementById('range-right');
  const outputLeft = document.getElementById('output-left');
  const outputRight = document.getElementById('output-right');
  const rangeTrackActive = document.querySelector('.range-track-active');

  // Ensure all necessary elements are present
  if (!rangeLeft || !rangeRight || !outputLeft || !outputRight || !rangeTrackActive) {
    return;
  }

  /**
   * Function to update the range values and styles
   */
  const updateRange = () => {
    const min = parseFloat(rangeLeft.min);
    const max = parseFloat(rangeLeft.max);
    const leftValue = Math.min(parseFloat(rangeLeft.value), parseFloat(rangeRight.value) - 0.01);
    const rightValue = Math.max(parseFloat(rangeRight.value), parseFloat(rangeLeft.value) + 0.01);

    // Update range input values to ensure correct range limits
    rangeLeft.value = leftValue;
    rangeRight.value = rightValue;

    // Format values to two decimal places
    const formattedLeftValue = leftValue.toFixed(2);
    const formattedRightValue = rightValue.toFixed(2);

    // Display formatted values
    outputLeft.textContent = formattedLeftValue;
    outputRight.textContent = formattedRightValue;

    // Calculate percentage positions for active track
    const percentageLeft = ((leftValue - min) / (max - min)) * 100;
    const percentageRight = ((rightValue - min) / (max - min)) * 100;

    // Update the active range track style
    rangeTrackActive.style.left = `${percentageLeft}%`;
    rangeTrackActive.style.width = `${percentageRight - percentageLeft}%`;
  };

  // Initial update to set the correct range positions and values
  updateRange();

  // Add event listeners to update the range on input changes
  rangeLeft.addEventListener('input', updateRange);
  rangeRight.addEventListener('input', updateRange);
});
