import { overlay } from "./index";

// функция открытия попапа
const openPopup = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleCloseOnEsc);
  overlay();  
}
  
// функция закрытия попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleCloseOnEsc);
}

//does: закрытие попапа на ESC
const handleCloseOnEsc = (evt) => {
    if (evt.key === 'Escape') {
      const openPopup = document.querySelector('.popup_is-opened');
      closePopup(openPopup)
    }
  }

export {openPopup, closePopup};