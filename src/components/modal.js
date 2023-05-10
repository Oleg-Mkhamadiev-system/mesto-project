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
  avatarImageInput
} from "./constants.js";

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
  setUserInfo,
  setUserAvatar
};
