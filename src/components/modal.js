import {
  nameInput,
  aboutInput,
  profileTitle,
  profileSubtitle,
  popupImageContent,
  popupFigcaption,
  popupProfile,
  popupPlace,
  popupImages,
  popupAvatar,
  profileAvatar,
  avatarImageInput,
  submitButtonEdit,
  submitButtonAvatar,
  submitButtonCreateImage,
} from "./utils.js";

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  // навешиваю обработчик на закрытие открытого попапа по кнопке
  document.addEventListener("keydown", closeByEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  // удаляю обработчик
  document.removeEventListener("keydown", closeByEsc);
}

function openEditPopup() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
  openPopup(popupProfile);
}

function openAddPopup() {
  openPopup(popupPlace);
}

function openAddAvatarPopup() {
  avatarImageInput.value = profileAvatar.src;
  openPopup(popupAvatar);
}

function setUserInfo(data) {
  profileTitle.textContent = data.name;
  profileSubtitle.textContent = data.about;
}

function setUserAvatar(data) {
  profileAvatar.src = data.avatar;
}

function disableButton(button) {
  button.disabled = true;
  button.classList.add("popup__save-button_disabled");
}

// функция кнопки загрузки
function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    submitButtonEdit.textContent = "Сохранить";
    submitButtonAvatar.textContent = "Сохранить";
    submitButtonCreateImage.textContent = "Создать";
  }
}

// функция открытия попапа картинки
function openPopupImages(name, link) {
  popupImageContent.src = link;
  popupImageContent.alt = name;
  popupFigcaption.textContent = name;
  openPopup(popupImages);
}

// функция закрытия попапов по клику на кнопку Escape
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

export {
  openEditPopup,
  openAddPopup,
  openAddAvatarPopup,
  closePopup,
  openPopupImages,
  disableButton,
  setUserInfo,
  setUserAvatar,
  renderLoading,
};
