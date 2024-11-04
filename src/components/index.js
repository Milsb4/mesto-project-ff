
import '../pages/index.css';

import {initialCards} from './cards';
import {deleteCard, likeCard, createCard} from './card';
import {openPopup, closePopup} from './modal';
import {enableValidation, clearValidation, validationConfig} from './validation'

// DOM-узлы
const cardList = document.querySelector('.places__list');
// Popup
const popups = document.querySelectorAll('.popup');
const newCardPopup = document.querySelector('.popup_type_new-card');
const editPopup = document.querySelector('.popup_type_edit');
const imagePopup = document.querySelector('.popup_type_image');   
const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close');     
const addCArdButton = document.querySelector('.profile__add-button');
const popupCaption = document.querySelector(".popup__caption");
const image = document.querySelector(".popup__image");

// поля формы
const profileTitle = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');  
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const cardLinkInput = document.querySelector('.popup__input_type_url');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const profileForm = editPopup.querySelector('.popup__form');

//объект функций-параметров
const functionObj = {
  deleteCard,
  likeCard,
  openImagePopup
};

//does: вывод карточек на страницу 
function render(){
  initialCards.forEach(function(cardData){;
  const cardElement = createCard(cardData, functionObj);
  cardList.append(cardElement)});
} 

render();

//does: открытие попапа профиля
editButton.addEventListener('click',  () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editPopup);
  clearValidation(editPopup, validationConfig);
});

//does: открытие попапа новой карточки
addCArdButton.addEventListener('click',  () => { 
  openPopup(newCardPopup);
});

//does: открытие попапа картинки
function openImagePopup(evt){
  image.src = evt.link;
  image.alt = evt.name;
  popupCaption.textContent = evt.name;
  openPopup(imagePopup);
}

//does: закрытие попапа на кнопку
closeButtons.forEach((button) => {
button.addEventListener('click', function() {
  const popup = button.closest('.popup');
  popup.classList.remove('popup_is-opened');
  }); 
});

//does: заполнение формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileJob.textContent = jobValue;
  closePopup(editPopup);
}

// обработчик к форме:
profileForm.addEventListener('submit', handleFormSubmit); 

//does: Добавление карточки пользователем
newCardPopup.addEventListener('submit', function(evt){
  evt.preventDefault();
  const cardObj = {};
  cardObj.name = cardNameInput.value;
  cardObj.link = cardLinkInput.value;
  const cardElement = createCard(cardObj, functionObj);
  cardList.prepend(cardElement);
  evt.target.reset()
  closePopup(newCardPopup);
}); 

//добавление анимации на попап
popups.forEach((element) => element.classList.add('popup_is-animated'));

// прием всех значений
enableValidation(validationConfig); 


fetch('https://mesto.nomoreparties.co/v1/pwff-cohort-1/users/me',{
  method: 'GET',
  headers: {
    authorization: '4397dce6-8787-4df4-b446-3a1fb71ed542'
  }
  })
  .then(res => res.json())
    .then((result) => {
      console.log(result);
    }); 



