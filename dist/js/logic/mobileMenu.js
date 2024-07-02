document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector(".header__mobile");
  const menuOpen = document.querySelector(".menu__open");
  const menuClose = document.querySelector(".menu__close");
  const megaHeadLists = [
    { head: document.getElementById('category-1'), list: document.getElementById('list-1') },
    { head: document.getElementById('category-2'), list: document.getElementById('list-2') },
    { head: document.getElementById('category-3'), list: document.getElementById('list-3') }
  ];
  const mega = document.querySelectorAll(".header__mobile-mega");
  const home = document.querySelector(".Home");

  const toggleVisibility = (element) => {
    element.classList.toggle("hidden");
  };

  const handleMenuToggle = (isOpen) => {
    header.style.display = isOpen ? "flex" : "none";
    menuOpen.style.display = isOpen ? "none" : "flex";
    menuClose.style.display = isOpen ? "flex" : "none";
  };

  home.addEventListener('click', (e) => {
    e.preventDefault();
    mega.forEach(toggleVisibility);
  });

  megaHeadLists.forEach(({ head, list }) => {
    head.addEventListener('click', () => toggleVisibility(list));
  });

  menuOpen.addEventListener('click', () => handleMenuToggle(true));
  menuClose.addEventListener('click', () => handleMenuToggle(false));
});
