import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const imgHtml = galleryItems.map(img => {
  return `<li class="gallery__item">
        <a class="gallery__link" href="${img.original}">
          <img
            class="gallery__image"
            src="${img.preview}"
            alt="${img.description}"
          />
        </a>
      </li>`;
}).join('');

gallery.insertAdjacentHTML('afterbegin', imgHtml);

const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      captionsPosition: 'bottom',
    });
