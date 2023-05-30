import {
  profileEditButton,
  profileAddButton,
  popupButtonCloseList,
  formEditElement,
  formNewCardElement,
  formAvatarElement,
  popupElementList,
  cardsContainer,
  validationConfig,
  profileAvatarButton,
  nameInput,
  aboutInput,
  popupProfile,
  buttonEdit,
  buttonCreateImage,
  namePlaceInput,
  linkImageInput,
  avatarImageInput,
  popupPlace,
  popupAvatar,
  buttonAvatar,
} from "../components/constants.js";
import { enableValidation } from "../components/validate.js";

import { createCard } from "./card.js";

import { renderLoading, disableButton } from "../components/utils.js";

import Api from "../components/api.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import UserInfo from "../components/UserInfo.js";


import "../pages/index.css";
export let myId; // объявляю глобально переменную

// инстанс попапа формы редактирования профиля
const popupEditProfile = new PopupWithForm({
  popupSelector: popupProfile,
  handleSubmitForm: handleSubmitEditForm,
});

// слушатель открытия попапа редактирования профиля
popupEditProfile.setEventListeners();

// инстанс попапа формы добавления карточек
const popupAddPlace = new PopupWithForm({
  popupSelector: popupPlace,
  handleSubmitForm: handleSubmitAddForm,
});

// слушатель открытия попапа добавления карточки
popupAddPlace.setEventListeners();

// инстанс редактипрования попапа аватара
const popupAddAvatar = new PopupWithForm({
  popupSelector: popupAvatar,
  handleSubmitForm: handleSubmitAddAvatar,
});

// слушатель редактирования попапа аватара
popupAddAvatar.setEventListeners();

function handleCardDeleteClick(newCard) {
  api
      .deleteCard(newCard._id)
      .then(() => {
        newCard.handleCardDelete()
      })
      .catch((err) => {
        console.log(err);
      });
}

// инстанс попапа картинки
const popupZoomImages = new PopupWithImage(popupImages);

// функция открытия попапа картинки
function handleCardClick(name, link) {
  popupZoomImages.open(name, link);
}

// слушатель открытия попапа картинки
popupZoomImages.setEventListeners();

// колбэк редактирования аватара
async function handleSubmitAddAvatar(data) {
  try {
    const profileUser = await api.editUserAvatar({
      avatar: data.avatar
    });

    userAboutInfo.setUserAvatar(profileUser);
  } catch (err) {
    console.log(err);
  }
}

// функция добавления карточек
async function handleSubmitAddForm(data) {
  try {
    const newCard = await api.createNewCard({
      name: data.name,
      link: data.link
    });

    cardListSection.addItem(createCard(newCard));
  } catch (err) {
    console.log(err);
  }
}

// функция добавления информации о пользователе
async function handleSubmitEditForm(data) {
  try {
    const profileUser = await api.setUserInfoProfile({
      name: data.name,
      about: data.about
    });

    userAboutInfo.setUserInfo(profileUser);
  } catch (err) {
    console.log(err);
  }
}

// промис отрисовывает карточки с сервера
// и данные пользователя
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([profileUser, initialCards]) => {
    userAboutInfo.setUserInfo(profileUser);
    userAboutInfo.setUserAvatar(profileUser);
    userId = profileUser._id;

    cardListSection.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });

// обработчики на открытие попапов
profileEditButton.addEventListener("click", openEditPopup);
profileAddButton.addEventListener("click", openAddPopup);
profileAvatarButton.addEventListener("click", openAddAvatarPopup);

// обработчики на сабмитные кнопки
formEditElement.addEventListener("submit", handleSubmitEditForm);
formNewCardElement.addEventListener("submit", handleSubmitAddForm);
formAvatarElement.addEventListener("submit", handleSubmitAddAvatar);

// обработчик на закрытие попапов по клику мыши на крестик
popupButtonCloseList.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});

// перебираю коллекцию массива попапов методом forEach
popupElementList.forEach((popupElement) => {
  // навешиваю обработчик на закрытие попапов по клику на оверлэй
  popupElement.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__overlay")) {
      closePopup(popupElement);
    }
  });
});

// вызываю функцию валидации
enableValidation(validationConfig);
