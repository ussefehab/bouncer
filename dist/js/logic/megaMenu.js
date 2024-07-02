// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the "Home" navigation item that triggers the mega menu
    const homeItem = document.getElementById('nav__item--mega');
    // Select the mega menu element
    const megaMenu = document.querySelector('.nav__mega-menu');
  
    // Function to show the mega menu
    const showMegaMenu = () => {
      megaMenu.style.opacity = '1';
      megaMenu.style.visibility = 'visible';
    };
  
    // Function to hide the mega menu
    const hideMegaMenu = () => {
      megaMenu.style.opacity = '0';
      megaMenu.style.visibility = 'hidden';
    };
  
    // Event listener to show the mega menu when hovering over the "Home" item
    homeItem.addEventListener('mouseover', showMegaMenu);
  
    // Event listener to hide the mega menu when the mouse leaves the "Home" item
    homeItem.addEventListener('mouseout', () => {
      setTimeout(() => {
        // Check if the mouse is not hovering over the mega menu before hiding it
        if (!megaMenu.matches(':hover')) {
          hideMegaMenu();
        }
      }, 10000); // Delay hiding the mega menu for 10 seconds
    });
  
    // Event listener to hide the mega menu when the mouse leaves the mega menu
    megaMenu.addEventListener('mouseleave', hideMegaMenu);
  });
  