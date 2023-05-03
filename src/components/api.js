
  const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/plus-cohort-23",
  headers: {
    authorization: "8e6d025a-6054-4076-a0d4-21047d048aad",
    "Content-Type": "application/json",
  }
}

  // метод проверяет запрос
  // возвращает либо промис с выполненной задачей, либо ошибку
  export const checkStatusResponse = (res) => {
    if (res.ok) {
        return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
  }

  // получаю от сервера массив карточек
  export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      method: "GET",
      headers: config.headers,
    }).then((res) => {
      return checkStatusResponse(res);
    });
  }

  // метод получения информации о пользователе с сервера
  export const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "GET",
      headers: config.headers,
    }).then((res) => {
      return checkStatusResponse(res);
    });
  }

  // метод редактирования профиля пользователя на сервере
  export const setUserInfoProfile = (data) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH", // метод для частичного обновления ресурса на сервере
      headers: config.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    }).then((res) => {
      return checkStatusResponse(res);
    });
  }

  // метод добавления новой карточки на сервере
  export const createNewCard = (data) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    }).then((res) => {
      return checkStatusResponse(res);
    });
  }

  // метод получения лайков на сервере
  export const addlikeCard = (_id) => {
    return fetch(`${config.baseUrl}/cards/${_id}/likes`, {
      method: "PUT",
      headers: config.headers,
    }).then((res) => {
      return checkStatusResponse(res);
    });
  }

  // метод удаления карточки на сервере
  export const deleteCard = (_id) => {
    return fetch(`${config.baseUrl}/cards/${_id}`, {
      method: "DELETE",
      headers: config.headers,
    }).then((res) => {
      return checkStatusResponse(res);
    });
  }

  // метод обновления аватара на сервере
  export const editUserAvatar = (data) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => {
      return checkStatusResponse(res);
    });
  }

  // метод снятия лайка на карточке на сервере
  export const deleteCardLike = (_id) => {
    return fetch(`${config.baseUrl}/cards/${_id}/likes`, {
      method: 'DELETE',
      headers: config.headers,
    }).then((res) => {
      return checkStatusResponse(res);
    });
  }

