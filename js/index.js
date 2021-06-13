'use strict';
import galleryItems from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");
const ligthbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image")
const lightboxButton = document.querySelector(".lightbox__button")
const lightboxOverlay = document.querySelector(".lightbox__overlay");
const lightboxContent = document.querySelector(".lightbox__content");
let galleryItem = " ";
galleryItems.forEach(item => {
   galleryItem += (`<li class = "gallery__item"><img class = "gallery__image" src = "${item.preview}" alt = "${item.description}" data-source = "${item.original}"></li>`)
});

gallery.insertAdjacentHTML('afterbegin', galleryItem);

gallery.addEventListener('click', openImage);
lightboxButton.addEventListener('click', closeImage);
lightboxOverlay.addEventListener('click', closeImage);
window.addEventListener('keyup', closeEsc);


function openImage(event) {
   ligthbox.classList.add('is-open');
   lightboxImage.setAttribute('src', event.target.getAttribute('data-source'));
   lightboxImage.setAttribute('alt', event.target.getAttribute('alt'));
};

function closeImage(event) {
   ligthbox.classList.remove('is-open');
   lightboxImage.setAttribute('src', "");
   lightboxImage.setAttribute('alt', "");
};

function closeEsc({ key }) {
   if (key === "Escape") {
      closeImage()
   };
}