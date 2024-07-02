document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const popup = document.querySelector('.pop-up');
    const closeBtn = document.querySelector('.pop-up__btn-close');
    const subscribeForm = document.querySelector('.pop-up__content--email');
    const neverShowCheckbox = document.getElementById('neverShow');
        // Show the pop-up and overlay after 10 seconds
    setTimeout(() => {
        if (!Cookies.get('popupDismissed')){  
            overlay.style.display = 'block';
            popup.style.display = 'flex';
        }
        }
    , 5000);
// Close button functionality
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        if (neverShowCheckbox.checked) {
        Cookies.set('popupDismissed', 'true', { expires: 365 });
        }
    });
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        if (neverShowCheckbox.checked) {
        Cookies.set('popupDismissed', 'true', { expires: 365 });
        }
    });
//   Form submission handling
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = subscribeForm.email.value;
        console.log(`Email submitted: ${email}`);

        overlay.style.display = 'none';
        popup.style.display = 'none';
        Cookies.set('popupDismissed', 'true', { expires: 365 });
    });
});