const green = document.querySelector(".greenline");

let width_percentage = 0;

const interval = setInterval(() => {
  width_percentage += 5;
  green.style.width = width_percentage + "%";
  //green.style.width = "20%"
  if (width_percentage === 100) {
    clearInterval(interval);
  }
}, 500);
