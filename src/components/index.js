
import '../pages/index.css';

import {deleteCard, clikeLike, createCard} from './card';
import {openPopup, closePopup} from './modal';
import {enableValidation, clearValidation, validationConfig} from './validation'
import {
  getInitialCards,
  getUsers,
  patchUsers, 
  postCards, 
  deleteCardsFromServer, 
  patchAvatarUsers
} from './api';
import { buttonLoading } from './loading';

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
const avatarPopup = document.querySelector('.popup_type_avatar');
const removeCardPopup = document.querySelector('.popup_type_delete');
const removeButton = removeCardPopup.querySelector(".popup__button");

// поля формы
const profileImage = document.querySelector('.profile__image');
const profileTitle = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');  
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const cardLinkInput = document.querySelector('.popup__input_type_url');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const avatarInput = document.querySelector('.popup__input_type_avatar')
const profileForm = editPopup.querySelector('.popup__form');

let userId;

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
  clearValidation(newCardPopup, validationConfig);
});

//does: открытие попапа картинки
const openImagePopup = (evt) => {
  image.src = evt.link;
  image.alt = evt.name;
  popupCaption.textContent = evt.name;
  openPopup(imagePopup);
}

//открытие попапа автара
profileImage.addEventListener('click', () => {
  openPopup(avatarPopup)
  clearValidation(avatarPopup, validationConfig);
})

//does: закрытие попапа на кнопку
closeButtons.forEach((button) => {
button.addEventListener('click', function() {
  const popup = button.closest('.popup');
  popup.classList.remove('popup_is-opened');
  }); 
});

//does: заполнение формы
const handleFormSubmit = (evt) => {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileJob.textContent = jobValue;
  buttonLoading(evt, true);
  patchUsers(nameInput.value, jobInput.value)
  .then(closePopup(editPopup))
  .catch((err) => {
    console.error('Ошибка при отправке данных пользователя:', err);
  })
  .finally(() => {
    buttonLoading(evt, false);
  })
}

// обработчик к форме:
profileForm.addEventListener('submit', handleFormSubmit); 

//does: Добавление карточки пользователем
const addNewCard = (evt) => {
  const dataset = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };
  evt.preventDefault();
  buttonLoading(evt, true);
  postCards(dataset)
  .then((dataset) => {
    const cardElement = createCard(dataset,  userId, handleDeleteCard, clikeLike, openImagePopup);
  cardList.prepend(cardElement);
  closePopup(newCardPopup);
  evt.target.reset();
  })
  .catch((err) => {
    console.error('Ошибка при отправке данных карточки:', err);
  })
  .finally(() => {
    buttonLoading(evt, false);
  })
}

newCardPopup.addEventListener('submit', addNewCard)

//добавление анимации на попап
popups.forEach((element) => element.classList.add('popup_is-animated'));

// прием всех значений
enableValidation(validationConfig); 

// Получение данных о пользователе, карточках 
const getData = () => {
  Promise.all([getInitialCards(),getUsers()])
  .then(([cards, user]) => {
  profileTitle.textContent = user.name;
  profileJob.textContent = user.about;
  userId = user._id;
  profileImage.style.backgroundImage = `url(${user.avatar})`;
  cards.forEach((data) => { 
    cardList.append(
      createCard(data, userId, handleDeleteCard, clikeLike, openImagePopup)
    )
  }) 
})
}

getData();

//Удаление карточки 
const  handleDeleteCard = (cardId, dataset) => {
  openPopup(removeCardPopup);
  removeButton.onclick = () => {
  deleteCardsFromServer(cardId)
    .then(() => {
      deleteCard(dataset);
      closePopup(removeCardPopup);
    })
    .catch((err) => {
      console.log('Ошибка при удалении карточки:', err);
    });
  };  
}

avatarPopup.addEventListener('submit', (evt) => {
  evt.preventDefault();
  buttonLoading(evt, true);
  patchAvatarUsers(avatarInput.value)
  .then((data) => {
    profileImage.style.backgroundImage = `url(${data.avatar})`;
    closePopup(avatarPopup);
  })
  .catch((err) => {
    console.log('Ошибка при отправке URL:', err);
  })
  .finally(() => {
    buttonLoading(evt, false);
  })
})
