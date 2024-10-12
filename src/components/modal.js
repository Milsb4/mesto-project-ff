// открытие попапа
const openPopup = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleCloseOnEsc);
  closeOverlay();  
}
  
// закрытие попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleCloseOnEsc);
}

// закрытие попапа на ESC
const handleCloseOnEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_is-opened');
    closePopup(openPopup);
  }
}

// закрытие попапа нажатием на оверлей
function closeOverlay(){
  const modal = document.querySelector('.popup_is-opened');
  modal.addEventListener('click', (evt) => {
    if (evt.target === modal){
      closePopup(modal);
    }
  }) 
}  
export {openPopup, closePopup};