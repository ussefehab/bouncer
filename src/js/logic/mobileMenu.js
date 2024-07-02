// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the mobile header
  const header = document.querySelector(".header__mobile");
  // Select the menu open button
  const menuOpen = document.querySelector(".menu__open");
  // Select the menu close button
  const menuClose = document.querySelector(".menu__close");

  // Create an array of objects for mega menu headers and their corresponding lists
  const megaHeadLists = [
    { head: document.getElementById('category-1'), list: document.getElementById('list-1') },
    { head: document.getElementById('category-2'), list: document.getElementById('list-2') },
    { head: document.getElementById('category-3'), list: document.getElementById('list-3') }
  ];

  // Select all mega menu elements
  const mega = document.querySelectorAll(".header__mobile-mega");
  // Select the "Home" element
  const home = document.querySelector(".Home");

  // Function to toggle the visibility of an element by adding/removing the "hidden" class
  const toggleVisibility = (element) => {
    element.classList.toggle("hidden");
  };

  // Function to handle the visibility of the menu (open/close)
  const handleMenuToggle = (isOpen) => {
    header.style.display = isOpen ? "flex" : "none"; // Display the header flex if opening, none if closing
    menuOpen.style.display = isOpen ? "none" : "flex"; // Hide the open button if opening, show if closing
    menuClose.style.display = isOpen ? "flex" : "none"; // Show the close button if opening, hide if closing
  };

  // Event listener for the "Home" element to toggle the visibility of all mega menu elements
  home.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default action of the click event
    mega.forEach(toggleVisibility); // Toggle visibility of each mega menu element
  });

  // Add event listeners for each mega menu header to toggle the visibility of their corresponding list
  megaHeadLists.forEach(({ head, list }) => {
    head.addEventListener('click', () => toggleVisibility(list));
  });

  // Event listener for the menu open button to show the menu
  menuOpen.addEventListener('click', () => handleMenuToggle(true));

  // Event listener for the menu close button to hide the menu
  menuClose.addEventListener('click', () => handleMenuToggle(false));
});
