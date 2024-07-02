const homeItem = document.getElementById('nav__item--mega');
const megaMenu = document.querySelector('.nav__mega-menu');

homeItem.addEventListener('mouseover', () => {
    megaMenu.style.opacity = '1';
    megaMenu.style.visibility = 'visible';
});

homeItem.addEventListener('mouseout', () => {
    setTimeout(() => {
        if (!megaMenu.matches(':hover')) {
            megaMenu.style.opacity = '0';
            megaMenu.style.visibility = 'hidden';
        }
    }, 10000);
});

megaMenu.addEventListener('mouseleave', () => {
    megaMenu.style.opacity = '0';
    megaMenu.style.visibility = 'hidden';
});