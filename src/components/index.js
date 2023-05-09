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
  submitButtonEdit,
  submitButtonCreateImage,
  namePlaceInput,
  linkImageInput,
  popupPlace,
} from "./utils.js";
import { enableValidation } from "./validate.js";

import { createCard } from "./card.js";
import {
  openEditPopup,
  openAddPopup,
  openAddAvatarPopup,
  closePopup,
  setUserInfo,
  setUserAvatar,
  renderLoading,
  disableButton,
} from "./modal.js";

import {
  getUserInfo,
  getInitialCards,
  createNewCard,
  editUserAvatar,
  setUserInfoProfile,
} from "./api.js";

import "../pages/index.css";
export let myId; // объявляю глобально переменную

// промис отрисовывает карточки с сервера
// и данные пользователя
Promise.all([getUserInfo(), getInitialCards()])
  .then(([profileUser, initialCards]) => {
    setUserInfo(profileUser);
    setUserAvatar(profileUser);
    myId = profileUser._id;

    initialCards.forEach((result) => {
      const newCard = createCard(
        result.name,
        result.link,
        result._id,
        result.owner._id,
        result.likes,
        myId
      );
      cardsContainer.prepend(newCard);
    });
  })
  .catch((err) => {
    console.log(err);
  });

function handleSubmitAddForm(evt) {
  evt.preventDefault();
  renderLoading(true, submitButtonCreateImage);
  createNewCard({
    name: namePlaceInput.value,
    link: linkImageInput.value,
  })
    .then((data) => {
      const newCard = createCard(
        data.name,
        data.link,
        data._id,
        data.owner._id,
        data.likes,
        data.owner._id
      );
      cardsContainer.prepend(newCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, submitButtonCreateImage);
      closePopup(popupPlace);
      formNewCardElement.reset();
      disableButton(submitButtonCreateImage);
    });
}

// колбэк редактирования аватара
async function handleSubmitAddAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, submitButtonEdit);
  try {
    const profileUser = await editUserAvatar({
      avatar: avatarImageInput.value,
    });
    setUserAvatar(profileUser);
  } catch (err) {
    console.log(err);
  } finally {
    renderLoading(false, submitButtonEdit);
    disableButton(submitButtonEdit);
  }
}

// функция добавления информации о пользователе
async function handleSubmitEditForm(evt) {
  evt.preventDefault();
  renderLoading(true, submitButtonEdit);
  try {
    const profileUser = await setUserInfoProfile({
      name: nameInput.value,
      about: aboutInput.value,
    });
    setUserInfo(profileUser);
  } catch (err) {
    console.log(err);
  } finally {
    renderLoading(false, submitButtonEdit);
    closePopup(popupProfile);
    disableButton(submitButtonEdit);
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
