const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];
// DOM-узел
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
function createCard(cardData, {deleteCard, likeCard, openImagePopup}) { 
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  cardTitle.textContent = cardData.name;
  cardImage.alt = cardData.name;
  cardImage.src =  cardData.link;
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.card__like-button').addEventListener('click', likeCard);
  cardImage.addEventListener('click', () => openImagePopup(cardData));
  return cardElement;
};

//does: Удаление карточки
function deleteCard (evt){
  const currentCard = evt.target.closest('.card');
  currentCard.remove();
}

//does: функция лайка карточки
function likeCard (evt){
  const button = evt.target.closest('.card__like-button');
  button.classList.toggle('card__like-button_is-active');
}

export {initialCards, deleteCard, likeCard, createCard};