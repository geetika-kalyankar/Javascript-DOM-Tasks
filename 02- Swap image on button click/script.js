const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const swap = document.querySelector(".btn");

swap.addEventListener("click", function () {
  let src1 = image1.src;
  let src2 = image2.src;
  image1.src = src2;
  image2.src = src1;
});
