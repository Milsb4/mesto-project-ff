const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/pwff-cohort-1',
  headers: {
    authorization: '4397dce6-8787-4df4-b446-3a1fb71ed542',
    'Content-Type': 'application/json'
  }
}

const hadleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res}`);
}

const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  })
  .then(hadleResponse)
} 

const getUsers = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
    })
    .then(hadleResponse)
}

const patchUsers = (profileTitle, profileDescription) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: profileTitle,
      about: profileDescription
    })
  })
  .then(hadleResponse)
}

const postCards = (dataSet) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: dataSet.name,
      link: dataSet.link
    })
  })
  .then(hadleResponse)
}

const deleteCardsFromServer = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`,{
    method: 'DELETE',
    headers: config.headers
  })
  .then(hadleResponse);
}

const patchLikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`,{
    method: 'PUT',
    headers: config.headers,
  })
  .then(hadleResponse)
}

const deleteLikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`,{
    method: 'DELETE',
    headers: config.headers,
  })
  .then(hadleResponse)
}

const patchAvatarUsers = (url) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: url
    })
  })
  .then(hadleResponse)
}

export {
  getInitialCards, 
  getUsers,
  patchUsers,
  postCards,
  deleteCardsFromServer,
  patchLikeCard,
  deleteLikeCard,
  patchAvatarUsers
}