document.addEventListener('DOMContentLoaded', () => {
    const btnGrid = document.getElementById('grid');
    const btnList = document.getElementById('list');
    const productsGrid = document.querySelector('.product-grid__card');
    const productsList = document.querySelector('.product-list__card');
    const iconGrid = document.getElementById('icon-grid');
    const iconList = document.getElementById('icon-list');
  
    /**
     * Function to switch to grid view
     */
    const switchToGridView = () => {
      productsGrid.style.display = 'grid';
      productsList.style.display = 'none';
      iconGrid.style.fill = '#33A0FF';
      iconList.style.fill = '#C1C8CE';
    };
  
    /**
     * Function to switch to list view
     */
    const switchToListView = () => {
      productsGrid.style.display = 'none';
      productsList.style.display = 'flex';
      iconList.style.fill = '#33A0FF';
      iconGrid.style.fill = '#C1C8CE';
    };
  
    // Add event listener to the grid button
    btnGrid.addEventListener('click', switchToGridView);
  
    // Add event listener to the list button
    btnList.addEventListener('click', switchToListView);
  });
  