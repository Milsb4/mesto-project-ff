const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

// Функция создания карточки

function renderCard(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  cardTitle.textContent = cardData.name;
  cardImage.setAttribute('alt', cardData.name);
  cardImage.setAttribute('src', cardData.link);
  cardDelete(cardElement);
  
  cardList.append(cardElement);
};

function cardDelete(element) {
  const deleteCardButton = element.querySelector('.card__delete-button');
  deleteCardButton.addEventListener ('click', clickDelete);
}

//Удаление карточки
function clickDelete (event){
  const currentCard = event.target.closest('.card');
  currentCard.remove();
}

// вывод на страницу
function render() {
  initialCards.forEach(renderCard);
}

render();



