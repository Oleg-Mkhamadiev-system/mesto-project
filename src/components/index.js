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
  initialCards
  //initialCards
} from "./utils.js";
import { enableValidation } from "./validate.js";

import { createCard } from "./card.js";
import {
  openEditPopup,
  openAddPopup,
  openAddAvatarPopup,
  closePopup,
  handleSubmitEditForm,
  handleSubmitAddForm,
  handleSubmitAddAvatar,
  setUserInfo,
  setUserAvatar
} from './modal.js';

import { editUserAvatar,
  setUserInfoProfile,
  getUserInfo,
  getInitialCards  } from "./api.js";

import "../pages/index.css";



/* function getInitialCards(initialCards) {
    // обрабатываем результат

    } */

  // промис отрисовывает карточки с сервера
// и данные пользователя
Promise.all([getUserInfo(), getInitialCards()])
  .then(([profileUser, initialCards]) => {
    setUserInfo(profileUser);
    setUserAvatar(profileUser);

    initialCards.forEach((result) => {
      const newCard = createCard(result.name, result.link, result.userId,
        result.ownerId);
        cardsContainer.prepend(newCard);
      })
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
formAvatarElement.addEventListener("sumbit", handleSubmitAddAvatar);

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
