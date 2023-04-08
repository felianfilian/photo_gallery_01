let images = [
  "img01.jpg",
  "img02.jpg",
  "img03.jpg",
  "img04.jpg",
  "img05.jpg",
  "img06.jpg",
  "img07.jpg",
  "img08.jpg",
  "img09.jpg",
  "img10.jpg",
];

let imageHolder = document.getElementById("image-holder-01");

function init() {
  for (let i = 0; i < images.length; i++) {
    imageHolder.innerHTML += `
  <img class="image-item" src="img/${images[i]}" alt=""></img>
  `;
  }
}
