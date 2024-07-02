document.addEventListener('DOMContentLoaded', () => {
    const counterValue = document.getElementById('counter-value');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
  
    function updateDisplay() {
      counterValue.textContent = counter;
    }
  
    let counter = 1;
    
    decrementButton.addEventListener('click', () => {
      if(counter > 1){
        counter--;
        updateDisplay();      }
      
    });
    
    incrementButton.addEventListener('click', () => {
      counter++;
      updateDisplay();
        });
  });  