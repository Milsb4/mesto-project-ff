// DOM-узел
import { patchLikeCard, deleteLikeCard} from "./api";

const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
const createCard = (dataSet, userId, handleDeleteCard, clikeLike, openImagePopup) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const likeButton = cardElement.querySelector('.card__like-button');
  const cardLikeCount = cardElement.querySelector('.card__like-button-counter');
  cardTitle.textContent = dataSet.name;
  cardImage.alt = dataSet.name;
  cardImage.src =  dataSet.link;
  cardLikeCount.textContent = dataSet.likes.length;
  cardElement.querySelector('.card__like-button').addEventListener('click', () => {
    clikeLike(cardElement, cardId, cardLikeCount)
  });
  const cardRemove  = cardElement.querySelector('.card__delete-button');
  let cardId = dataSet._id;
  if(dataSet.owner._id !== userId){  
    cardElement.querySelector('.card__delete-button').style.background = 'none'
  } else {
    cardRemove.addEventListener('click', () => {
      handleDeleteCard(cardId, cardElement)
    })
  }
  cardImage.addEventListener('click', () => openImagePopup(dataSet));

  const isLiked = dataSet.likes.some(({ _id }) => _id === userId);

  if (isLiked) {
    likeButton.classList.toggle("card__like-button_is-active");
  }
  return cardElement;
}; 

//does: Удаление карточки
const deleteCard = (dataset) => {
  if (dataset) {
    dataset.remove();
} else {
    console.error("Элемент не найден");
}
}

const clikeLike = (element, cardId, likeCardPlace) => {
  const button = element.querySelector('.card__like-button');
  const likeMethod = button.classList.contains('card__like-button_is-active') ? deleteLikeCard : patchLikeCard;
  likeMethod(cardId) 
    .then((res) => {
      likeCardPlace.textContent = res.likes.length;
        button.classList.toggle("card__like-button_is-active"); 
      })
    .catch(err => console.log('Ошибка кнопки лайка:', err));
}

export {deleteCard, clikeLike, createCard};