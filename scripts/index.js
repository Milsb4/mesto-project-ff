//dom-узлы
const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');


// Функция создания карточки
function createCard(cardData, deleteCard) { 
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  cardTitle.textContent = cardData.name;
  cardImage.alt = cardData.name;
  cardImage.src =  cardData.link;
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  
  return cardElement;
};

//Удаление карточки
function deleteCard (event){
  const currentCard = event.target.closest('.card');
  currentCard.remove();
}

// вывод на страницу
function render(){
  initialCards.forEach(function(cardData){;
  const cardElement = createCard(cardData, deleteCard);
  cardList.append(cardElement)});
} 

render();


