// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

// gallery.addEventListener("click", (event) => {
//   event.preventDefault();
// }); Це зайве, бо згідно документації, бібліотека SimpleLightbox сама блокує поведінку завантаження фото (Download: false)

const options = {
  captionsData: "alt",
  captionDelay: 250,

  spinner: false,
  close: false,

  animationSpeed: 500,
  widthRatio: 1,
};

const lightbox = new SimpleLightbox(".gallery a", options);
lightbox.on("show.simplelightbox", () => {
  console.log("Enjoy");
});