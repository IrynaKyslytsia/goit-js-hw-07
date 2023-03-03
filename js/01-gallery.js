import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

const modal = basicLightbox.create(`<img 
src="#"
width="1280" 
height="855" 
/>`, 
{onShow: () => {window.addEventListener('keydown', onEscKeyPress)}, 
onClose: () => {window.removeEventListener('keydown', onEscKeyPress)}});

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>
            `;
        }).join('');   
};

function onGalleryContainerClick(evt) {
    if(!evt.target.classList.contains('gallery__image')) {
        return;
    }
    evt.preventDefault();
	modal.element().querySelector('img').src = evt.target.dataset.source;
	modal.show();
};

function onEscKeyPress(evt) {
    if(evt.code === "Escape") {
        modal.close();
    }
   };

   console.log(galleryItems);