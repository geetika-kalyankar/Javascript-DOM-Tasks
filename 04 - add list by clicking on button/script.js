const inp = document.querySelector("#inp");
const list = document.querySelector(".list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (inp.value === "") {
    alert("input is empty");
  } else {
    let li = document.createElement("li");
    li.textContent = inp.value;
    list.appendChild(li);
  }
  inp.value = "";
});
