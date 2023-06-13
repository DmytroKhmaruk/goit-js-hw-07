import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const imgHtml = galleryItems.map(img => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img
        class="gallery__image"
        src="${img.preview}"
        data-source="${img.original}"
        alt="${img.description}"
      />
    </a>
  </li>`;
}).join('');

gallery.insertAdjacentHTML('afterbegin', imgHtml);
gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const image = event.target;
  openModal(image.dataset.source);
}

function openModal(src) {
  const modal = basicLightbox.create(`
    <img
      src="${src}"
    />
  `);

  modal.show();
  document.addEventListener('keyup', onCloseModalByKey);
  modal.element().addEventListener('click', onCloseModalByClick);

  function onCloseModalByKey(event) {
    if (event.code === 'Escape') {
      modal.close();
      document.removeEventListener('keyup', onCloseModalByKey);
    }
  }

  function onCloseModalByClick(event) {
    if (event.target === modal.element()) {
      modal.close();
      modal.element().removeEventListener('click', onCloseModalByClick);
    }
  }
}