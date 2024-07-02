document.addEventListener('DOMContentLoaded', () => {
    const rangeLeft = document.getElementById('range-left');
    const rangeRight = document.getElementById('range-right');
    const outputLeft = document.getElementById('output-left');
    const outputRight = document.getElementById('output-right');
    const rangeTrackActive = document.querySelector('.range-track-active');
  
    if (!rangeLeft || !rangeRight || !outputLeft || !outputRight || !rangeTrackActive) {
      return;
    }
    
    function updateRange() {
      const min = parseFloat(rangeLeft.min);
      const max = parseFloat(rangeLeft.max);
      const leftValue = Math.min(parseFloat(rangeLeft.value), parseFloat(rangeRight.value) - 0.01);
      const rightValue = Math.max(parseFloat(rangeRight.value), parseFloat(rangeLeft.value) + 0.01);
  
      rangeLeft.value = leftValue;
      rangeRight.value = rightValue;
  
      const formattedLeftValue = leftValue.toFixed(2);
      const formattedRightValue = rightValue.toFixed(2);
  
      outputLeft.textContent = formattedLeftValue;
      outputRight.textContent = formattedRightValue;
  
      const percentageLeft = ((leftValue - min) / (max - min)) * 100;
      const percentageRight = ((rightValue - min) / (max - min)) * 100;
  
      rangeTrackActive.style.left = `${percentageLeft}%`;
      rangeTrackActive.style.width = `${percentageRight - percentageLeft}%`;
    }
  
    updateRange();
  
    rangeLeft.addEventListener('input', updateRange);
    rangeRight.addEventListener('input', updateRange);
  
  });