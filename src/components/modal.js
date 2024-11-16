// открытие попапа
const openPopup = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleCloseOnEsc);
  document.addEventListener('click', closeOverlay);
}
  
// закрытие попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleCloseOnEsc);
  document.removeEventListener('click', closeOverlay);
}

// закрытие попапа на ESC
const handleCloseOnEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_is-opened');
    closePopup(openPopup);
  }
}

// закрытие попапа нажатием на оверлей
const closeOverlay = (evt) => {
  const modal = document.querySelector('.popup_is-opened');
    if (evt.target === modal){
      closePopup(modal);
  }
}
export {openPopup, closePopup};


