let input = document.querySelector("input");

let data = [
  {
    name: "Mukesh Ambani",
    src: "https://rilstaticasset.akamaized.net/sites/default/files/2022-09/mukesh-ambani.png",
  },
  {
    name: "Jeff Bezoz",
    src: "https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
  },
  {
    name: "Tim Cook",
    src: "https://imageio.forbes.com/specials-images/imageserve/61b9144f65931aadf0fc3b9c/Apple-s--CEO-Tim-Cook/960x0.jpg?format=jpg&width=960",
  },
  {
    name: "Bill Gates",
    src: "https://img.etimg.com/thumb/msid-71133822,width-640,height-480,imgsize-52214,resizemode-4/bill-gates-microsoft.jpg",
  },
  {
    name: "Elon Musk",
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg",
  },
  {
    name: "Brendan Eich",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
  },
];

let pers = "";
data.forEach(function (elem) {
  pers += `<div class="person">
           <div class="img">
             <img src="${elem.src}">
           </div>
           <h4>${elem.name}</h4>
         </div>`;
});

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
  let matching = data.filter(function (e) {
    return e.name.startsWith(input.value);
  });

  let newUsers = "";
  matching.forEach(function (elem) {
    newUsers += `<div class="person">
           <div class="img">
             <img src="${elem.src}">
           </div>
           <h4>${elem.name}</h4>
         </div>`;
  });

  document.querySelector(".people").innerHTML = newUsers;
});
