export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl
    this._headers = headers
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка в ${res.status}`)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(res => {
      return this._checkResponse(res)
    })
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(res => {
      return this._checkResponse(res)
    })
  }

  setUserInfoProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    }).then(res => {
      return this._checkResponse(res)
    })
  }

  uploadCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    }).then(res => {
      return this._checkResponse(res)
    })
  }

  addLike(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(res => {
      return this._checkResponse(res)
    })
  }

  deleteCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res)
    })
  }

  editUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(res => {
      return this._checkResponse(res)
    })
  }

  deleteLike(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(res => {
      return this._checkResponse(res)
    })
  }
}
