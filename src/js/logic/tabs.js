const tabsContainer = document.querySelector(".product__tabs--tabs");
tabsContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    const clicked = target.closest('.product__tabs--link');
    if (!clicked) return;
    const tabId = clicked.dataset.tab;
    
    // Remove active class from all tab links
    const tabs = document.querySelectorAll(".product__tabs--link");
    tabs.forEach(t => {
        t.classList.remove('product__tabs--link-active');
    });
    // Add active class to the clicked tab link
    clicked.classList.add('product__tabs--link-active');
    
    // Remove active class from all tab content sections
    const tabContent = document.querySelectorAll('.product__tabs--content');
    tabContent.forEach(c => {
        c.classList.remove('product__tabs--content-active');
    });
    // Add active class to the corresponding tab content section
    document.querySelector(`.product__tabs--content--${tabId}`).classList.add("product__tabs--content-active");
});
