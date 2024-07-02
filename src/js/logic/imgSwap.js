// Select the main large image element
const bigImg = document.querySelector(".product__images--img");

// Select the boxes containing the thumbnail images
const boxes = [
  document.getElementById("box--1"),
  document.getElementById("box--2"),
  document.getElementById("box--3"),
  document.getElementById("box--4")
];

// Select the thumbnail images
const smallImgs = [
  document.getElementById("img--1"),
  document.getElementById("img--2"),
  document.getElementById("img--3"),
  document.getElementById("img--4")
];

// Iterate over each box and add a click event listener
boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    // Update the src attribute of the main large image to the clicked thumbnail's src
    bigImg.src = smallImgs[index].src;
    
    // Remove the active class from all boxes
    boxes.forEach(b => b.classList.remove('product__images--box-active'));
    
    // Add the active class to the clicked box
    box.classList.add('product__images--box-active');
  });
});
