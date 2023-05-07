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
  submitButtonEdit
} from "./utils.js";
import { enableValidation } from "./validate.js";

import { createCard } from "./card.js";
import {
  openEditPopup,
  openAddPopup,
  openAddAvatarPopup,
  closePopup,
  handleSubmitAddForm,
  setUserInfo,
  setUserAvatar,
  renderLoading,
  disableButton
} from './modal.js';

import {
  getUserInfo,
  getInitialCards,
  editUserAvatar,
  setUserInfoProfile,
} from "./api.js";

import "../pages/index.css";
export let ownerId; // объявляю глобально переменную


// промис отрисовывает карточки с сервера
// и данные пользователя
Promise.all([getUserInfo(), getInitialCards()])
  .then(([profileUser, initialCards]) => {
    setUserInfo(profileUser);
    setUserAvatar(profileUser);
    ownerId = profileUser._id;

    initialCards.forEach((result) => {
      const newCard = createCard(
        result.name, result.link, result._id,
        result.owner._id, result.likes);
        cardsContainer.prepend(newCard);
      })
    })
  .catch((err) => {
    console.log(err);
  });

  // колбэк редактирования аватара
async function handleSubmitAddAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, profileAvatarButton)
  try {
    const profileUser = await editUserAvatar({
      avatar: avatarImageInput.value,
    });
    setUserAvatar(profileUser);
  } catch (err) {
    console.log(err);
  } finally {
    disableButton(validationConfig, profileAvatarButton);
    renderLoading(false, profileAvatarButton);
  }
}

// функция добавления информации о пользователе
async function handleSubmitEditForm(evt) {
  evt.preventDefault();
  renderLoading(true, profileEditButton);
  try {
    const profileUser = await setUserInfoProfile({
      name: nameInput.value,
      about: aboutInput.value,
    });
    setUserInfo(profileUser);
    closePopup(popupProfile);
  } catch (err) {
    console.log(err);
  } finally {
    disableButton(validationConfig, submitButtonEdit);
    renderLoading(false, profileEditButton);
  }
}
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
