function setupDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);  
    if (!dropdown) {
      return;
    }
  
    const dropbtn = dropdown.querySelector('.bar__dropdown--btn-text');
    if (!dropbtn) {
      return;
    }
  
    const links = dropdown.querySelectorAll('.bar__dropdown--content a');
  
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        dropbtn.textContent = link.textContent;
      });
    });
  }
  
setupDropdown('dropdown1');
setupDropdown('dropdown2');
setupDropdown('dropdown3');
  