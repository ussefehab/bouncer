document.addEventListener('DOMContentLoaded', () => {
    const homeItem = document.getElementById('nav__item--mega');
    const megaMenu = document.querySelector('.nav__mega-menu');
  
    const showMegaMenu = () => {
      megaMenu.style.opacity = '1';
      megaMenu.style.visibility = 'visible';
    };
  
    const hideMegaMenu = () => {
      megaMenu.style.opacity = '0';
      megaMenu.style.visibility = 'hidden';
    };
  
    homeItem.addEventListener('mouseover', showMegaMenu);
  
    homeItem.addEventListener('mouseout', () => {
      setTimeout(() => {
        if (!megaMenu.matches(':hover')) {
          hideMegaMenu();
        }
      }, 10000); // 10 seconds
    });
  
    megaMenu.addEventListener('mouseleave', hideMegaMenu);
  });
  