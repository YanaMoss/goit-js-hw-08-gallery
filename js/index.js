'use strict';
import galleryItems from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");
const ligthbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image")
const lightboxButton = document.querySelector(".lightbox__button")
const lightboxOverlay = document.querySelector(".lightbox__overlay");
let setItemGallery = " ";

// Добавляю элементы в html.
galleryItems.forEach(item => {
   setItemGallery += (`<li class = "gallery__item"><a class = "gallery__link" href = "${item.original}"><img class = "gallery__image" src = "${item.preview}" alt = "${item.description}" data-source = "${item.original}"></a></li>`);
});
gallery.insertAdjacentHTML('afterbegin', setItemGallery);

// Добавляю слушателей
gallery.addEventListener('click', openImage);
lightboxButton.addEventListener('click', closeImage);
lightboxOverlay.addEventListener('click', closeImage);
window.addEventListener('keyup', keyboard);
window.addEventListener('keyup', slider);

// Функция открытия картинки в оригинальном размере
function openImage(event) {
   event.preventDefault();
   ligthbox.classList.add('is-open');
   lightboxImage.setAttribute('src', event.target.getAttribute('data-source'));
   lightboxImage.setAttribute('alt', event.target.getAttribute('alt'));
}; 

// Функция закрытия картинки
function closeImage(event) {
   ligthbox.classList.remove('is-open');
   lightboxImage.setAttribute('src', "");
   lightboxImage.setAttribute('alt', "");
   
      
};

// Закрытие по "Esc"
function keyboard(event) {
   if (event.key === "Escape") {
      closeImage()
   };
};

// Слайдер

function slider(event) {
   if (event.key === "ArrowLeft") {
      swipeLeft(galleryItems);
   };
    if (event.key === "ArrowRight") {
      swipeRight(galleryItems);
   };
};

function swipeLeft(galleryItems) {
         for (let index = 0; index < galleryItems.length; index++) {
            const elementGalery = galleryItems[index];
            if (elementGalery.original === lightboxImage.getAttribute("src")&& index !==0) {
             lightboxImage.setAttribute('src', galleryItems[(index - 1)].original);
             lightboxImage.setAttribute('alt', galleryItems[(index - 1)].description);  
            };
   };
         
};

function swipeRight(galleryItems) {
         for (let index = 0; index < galleryItems.length; index++) {
            const elementGalery = galleryItems[index];
            if (elementGalery.original === lightboxImage.getAttribute("src")&& index !== (galleryItems.length -1)) {
            lightboxImage.setAttribute('src', galleryItems[(index + 1)].original);
            lightboxImage.setAttribute('alt', galleryItems[(index + 1)].description);
               break;
            };
   };        
};