
import '../pages/index.css';

import {initialCards, deleteCard, likeCard, createCard} from './cards';
import {openPopup, closePopup} from './modal';

// DOM-узлы
const cardList = document.querySelector('.places__list');
// Popup
const popup = document.querySelectorAll('.popup');
const newCardPopup = document.querySelector('.popup_type_new-card');
const editPopup = document.querySelector('.popup_type_edit');
const imagePopup = document.querySelector('.popup_type_image');   
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close');     
const addCArdButton = document.querySelector('.profile__add-button');
const popupCaption = document.querySelector(".popup__caption");
const popupImage = document.querySelector(".popup__image");
// поля формы
const nameInput = document.querySelector('.popup__input_type_name');
const cardLinkInput = document.querySelector('.popup__input_type_url');
const cardNameInput = document.querySelector('.popup__input_type_card-name')
const jobInput = document.querySelector('.popup__input_type_description');
const formElement = document.querySelector('.popup__form');

//объект функций-параметров
const obj = {
  deleteCard,
  likeCard,
  openImagePopup
};

//does: вывод карточек на страницу 
function render(){
  initialCards.forEach(function(cardData){;
  const cardElement = createCard(cardData, obj);
  cardList.append(cardElement)});
} 

render();

//does: открытие попапа профиля
editButton.addEventListener('click',  () => {
  openPopup(editPopup);
});

//does: открытие попапа новой карточки
addCArdButton.addEventListener('click',  () => { 
  openPopup(newCardPopup);
});

//does: открытие попапа картинки
function openImagePopup(evt){
  popupImage.src = evt.link;
  popupImage.alt = evt.name;
  popupCaption.textContent = evt.name;
  openPopup(imagePopup);
}


//does: закрытие попапа на кнопку
closeButton.forEach((button) => {
button.addEventListener('click', function() {
  const popup = button.closest('.popup');
  popup.classList.remove('popup_is-opened');
  }); 
});

//does: закрытие попапа на оверлей
export function overlay(){
  const modal = document.querySelector('.popup_is-opened');
  modal.addEventListener('click', (evt) => {
    if (evt.target === modal){
      closePopup(modal);
    }
  }) 
}

//does: заполнение формы
function handleFormSubmit(evt) {
  evt.preventDefault(); 
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  const profileTitle = document.querySelector('.profile__title');
  const profileJob = document.querySelector('.profile__description')
  profileTitle.textContent = nameValue;
  profileJob.textContent = jobValue;
  closePopup(editPopup);
}

// обработчик к форме:
formElement.addEventListener('submit', handleFormSubmit); 

//does: Добавление карточки пользователем
newCardPopup.addEventListener('submit', function(evt){
  evt.preventDefault();
  const cardObj = {};
  cardObj.name = cardNameInput.value;
  cardObj.link = cardLinkInput.value;
  const cardElement = createCard(cardObj, obj);
  cardList.append(cardElement);
  cardNameInput.value = '';
  cardLinkInput.value = '';
  closePopup(newCardPopup);
}); 

//добавление анимации на попап
popup.forEach((element) => element.classList.add('popup_is-animated'));

