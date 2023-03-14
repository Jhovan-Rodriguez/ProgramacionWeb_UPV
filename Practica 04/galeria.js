
// Funcion para seleccionar la galeria 
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

//Clase galeria
class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll('.img')];
    // target
    this.modal = getElement('.modal');
    this.modalImg = getElement('.main-img');
    this.imageName = getElement('.image-name');
    this.modalImages = getElement('.modal-images');
    this.closeBtn = getElement('.close-btn');
    this.nextBtn = getElement('.next-btn');
    this.prevBtn = getElement('.prev-btn');
    //Funciones de los botones 
    this.cerrarModal = this.cerrarModal.bind(this);
    this.imagenSig = this.imagenSig.bind(this);
    this.imagenAnt = this.imagenAnt.bind(this);
    this.escogerImagen = this.escogerImagen.bind(this);
    // container event para abrir el modal
    this.container.addEventListener(
      'click',
      function (e) {
        // self.openModal();
        if (e.target.classList.contains('img')) {
          this.openModal(e.target, this.list);
        }
      }.bind(this)
    );
  }
  //Funcion para abrir el modal colocando en el las imagenes
  openModal(selectedImage, list) {
    this.setMainImage(selectedImage);
    this.modalImages.innerHTML = list
      .map(function (image) {
        return `<img src="${
          image.src
        }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}"/>`;
      })
      .join('');
    this.modal.classList.add('open');
    this.closeBtn.addEventListener('click', this.cerrarModal);
    this.nextBtn.addEventListener('click', this.imagenSig);
    this.prevBtn.addEventListener('click', this.imagenAnt);
    this.modalImages.addEventListener('click', this.escogerImagen);
  }

  setMainImage(selectedImage) {
    this.modalImg.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
  }
  //Funcion para cerrar el modal
  cerrarModal() {
    this.modal.classList.remove('open');
    this.closeBtn.removeEventListener('click', this.cerrarModal);
    this.nextBtn.removeEventListener('click', this.imagenSig);
    this.prevBtn.removeEventListener('click', this.imagenAnt);
    this.modalImages.removeEventListener('click', this.escogerImagen);
  }
  //Funcion para selecionar la siguiente imagen
  imagenSig() {
    const selected = this.modalImages.querySelector('.selected');
    const next =
      selected.nextElementSibling || this.modalImages.firstElementChild;
    selected.classList.remove('selected');
    next.classList.add('selected');
    this.setMainImage(next);
  }
    //Funcion para selecionar la imagen anterior
  imagenAnt() {
    const selected = this.modalImages.querySelector('.selected');
    const prev =
      selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove('selected');
    prev.classList.add('selected');
    this.setMainImage(prev);
  }
  //Funcion de seleccionar imagen dentro del modal
  escogerImagen(e) {
    if (e.target.classList.contains('modal-img')) {
      const selected = this.modalImages.querySelector('.selected');
      selected.classList.remove('selected');

      this.setMainImage(e.target);
      e.target.classList.add('selected');
    }
  }
}

// Se obtienen los elementos de las galerias
const jhovan = new Gallery(getElement('.jhovan'));
const kevin = new Gallery(getElement('.kevin'));
