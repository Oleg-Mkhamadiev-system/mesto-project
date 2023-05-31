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

import Api from "../components/api.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Сard.js";


import "../pages/index.css";
export let userId; // объявляю глобально переменную

// инстанс апи
const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-23",
  headers: {
    authorization: "8e6d025a-6054-4076-a0d4-21047d048aad",
    "Content-Type": "application/json",
  },
})

// инстанс информации о пользователе 
const userAboutInfo = new UserInfo({
  name: profileTitle,
  about: profileSubtitle,
  avatar: profileAvatar,
})

// инстанс класса добавления карточек в контейнер
const cardListSection = new Section(
  {
    renderer: (items) => {
      cardListSection.addItem(createCard(items));
    },
  },
  containerSelector
)

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

// слушатель кнопки открытия попапа профиля
profileEditButton.addEventListener("click", () => {
  popupEditProfile.setInputValues(userAboutInfo.getUserInfo());
  profileFormValidation.disableSubmitButton();
  popupEditProfile.open();
});

// слушатель на кнопку попапа добавления карточки
profileAddButton.addEventListener("click", () => {
  cardFormValidation.disableSubmitButton();
  popupAddPlace.open();
});

// слушатель кнопки открытия попапа с аватаром
profileAvatarButton.addEventListener("click", () => {
  popupAddAvatar.setInputValues(userAboutInfo.getUserInfo());
  avatarFormValidation.disableSubmitButton();
  popupAddAvatar.open();
});

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

function handleCardLike(newCard) {
  if (newCard.like) {
    api.deleteCardLike(newCard._id)
    .then((data) => {
      newCard.countLikes(data.likes);
      // меняю состояние лайков
      newCard.toggleLikeState();
      newCard.removeLike();
    })
    .catch((err) => {
      console.log(err);
    })
  } else {
    api.addlikeCard(newCard._id)
    .then((data) => {
      newCard.setLike();
      // вызываю метод плдсчитывающий количество лайков
      newCard.countLikes(data.likes);
      // меняю состояние лайков
      newCard.toggleLikeState();
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

// функция создания карточки
function createCard(cardData) {
  const newCard = new Card(
    cardData,
    ".template__elements",
    handleCardClick,
    handleCardDeleteClick,
    handleCardLike,
    userId);

    return newCard.createCard();
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

const profileFormValidation = new FormValidator(
  validationConfig,
  formEditElement
);
profileFormValidation.enableValidation();

const cardFormValidation = new FormValidator(
  validationConfig,
  formNewCardElement
);
cardFormValidation.enableValidation();

const avatarFormValidation = new FormValidator(
  validationConfig,
  formAvatarElement
);
avatarFormValidation.enableValidation();
