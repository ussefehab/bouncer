const bigImg = document.querySelector(".product__images--img");
const boxes = [
  document.getElementById("box--1"),
  document.getElementById("box--2"),
  document.getElementById("box--3"),
  document.getElementById("box--4")
];
const smallImgs = [
  document.getElementById("img--1"),
  document.getElementById("img--2"),
  document.getElementById("img--3"),
  document.getElementById("img--4")
];

boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    bigImg.src = smallImgs[index].src;
    boxes.forEach(b => b.classList.remove('product__images--box-active'));
    box.classList.add('product__images--box-active');
  });
});
