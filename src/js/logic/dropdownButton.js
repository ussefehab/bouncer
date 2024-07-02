function setupDropdown(dropdownId) {
  // Get the dropdown element by its ID
  const dropdown = document.getElementById(dropdownId);  
  
  // If the dropdown element doesn't exist, exit the function
  if (!dropdown) {
      return;
  }

  // Get the dropdown button inside the dropdown element
  const dropbtn = dropdown.querySelector('.bar__dropdown--btn-text');
  
  // If the dropdown button doesn't exist, exit the function
  if (!dropbtn) {
      return;
  }

  // Get all the links inside the dropdown content
  const links = dropdown.querySelectorAll('.bar__dropdown--content a');

  // Add a click event listener to each link
  links.forEach(link => {
      link.addEventListener('click', event => {
          // Prevent the default action of the link (navigation)
          event.preventDefault();
          // Update the dropdown button's text with the clicked link's text
          dropbtn.textContent = link.textContent;
      });
  });
}

// Setup dropdowns by calling the function with different dropdown IDs
setupDropdown('dropdown1');
setupDropdown('dropdown2');
setupDropdown('dropdown3');
