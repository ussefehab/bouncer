document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const popup = document.querySelector('.pop-up');
    const closeBtn = document.querySelector('.pop-up__btn-close');
    const subscribeForm = document.querySelector('.pop-up__content--email');
    const neverShowCheckbox = document.getElementById('neverShow');
  
    const showPopup = () => {
      overlay.style.display = 'block';
      popup.style.display = 'flex';
    };
  
    const hidePopup = () => {
      overlay.style.display = 'none';
      popup.style.display = 'none';
      if (neverShowCheckbox.checked) {
        Cookies.set('popupDismissed', 'true', { expires: 365 });
      }
    };
  
    // Show the pop-up and overlay after 3 seconds
    setTimeout(() => {
      if (!Cookies.get('popupDismissed')) {
        showPopup();
      }
    }, 3000);
  
    // Close button functionality
    closeBtn.addEventListener('click', hidePopup);
    overlay.addEventListener('click', hidePopup);
  
    // Form submission handling
    subscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = subscribeForm.email.value;
      console.log(`Email submitted: ${email}`);
      hidePopup();
      Cookies.set('popupDismissed', 'true', { expires: 365 });
    });
  });
  