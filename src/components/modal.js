import {
  nameInput,
  aboutInput,
  namePlaceInput,
  linkImageInput,
  profileTitle,
  profileSubtitle,
  popupImageContent,
  popupFigcaption,
  popupProfile,
  popupPlace,
  popupImages,
  popupAvatar,
  cardsContainer,
  formNewCardElement,
  profileAvatar,
  avatarImageInput,
} from "./utils.js";
import { createCard } from "./card.js";
import { setUserInfoProfile, editUserAvatar, createNewCard } from "./api.js";

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

/* function handleSubmitEditForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  closePopup(popupProfile);
}

// функция добавления карточек
function handleSubmitAddForm(evt) {
  evt.preventDefault();
  const data = {
    name: namePlaceInput.value,
    link: linkImageInput.value
  };
  const newCard = createCard(data);
  cardsContainer.prepend(newCard);
  closePopup(popupPlace);
  const button = evt.submitter;
  button.disabled = true;
  button.classList.add("popup__save-button_disabled");
  formNewCardElement.reset();
} */

function setUserInfo(data) {
  profileTitle.textContent = data.name;
  profileSubtitle.textContent = data.about;
}

// функция добавления информации о пользователе
async function handleSubmitEditForm(evt) {
  evt.preventDefault();
  try {
    const profileUser = await setUserInfoProfile({
      name: nameInput.value,
      about: aboutInput.value,
    });
    setUserInfo(profileUser);
    closePopup(popupProfile);
  } catch (err) {
    console.log(err);
  }
}

// колбэк редактирования аватара
/* function handleSubmitAddAvatar(evt) {
  evt.preventDefault();
  api.editUserAvatar({
    avatar: data.avatarImageInput,
  })
  .then((data) => {
    profileAvatar.src = data.avatarImageInput;
  })
  .catch((err) => {
    console.log(err);
  })
} */

function setUserAvatar(data) {
  profileAvatar.src = data.avatar;
}

// колбэк редактирования аватара
async function handleSubmitAddAvatar(evt) {
  evt.preventDefault();
  try {
    const profileUser = await editUserAvatar({
      avatar: avatarImageInput.value,
    });
    setUserAvatar(profileUser);
  } catch (err) {
    console.log(err);
  }
}

async function handleSubmitAddForm(evt) {
  evt.preventDefault();
  try {
    const newCard = await createNewCard({
      name: namePlaceInput.value,
      link: linkImageInput.value,
    });
    cardsContainer.prepend(createCard(newCard));
      const button = evt.submitter;
      button.disabled = true;
      button.classList.add("popup__save-button_disabled");
      closePopup(popupPlace);
      formNewCardElement.reset();
  } catch (err) {
    console.log(err);
  }
}
/* function handleSubmitAddForm(evt) {
  evt.preventDefault();
  createNewCard({
    name: namePlaceInput.value,
    link: linkImageInput.value,
  })
    .then((data) => {
      const newCard = createCard(
        data.name,
        data.link,
        data.userId,
        data.ownerId
      );
      cardsContainer.prepend(createCard(newCard));
      closePopup(popupPlace);
      const button = evt.submitter;
      button.disabled = true;
      button.classList.add("popup__save-button_disabled");
      formNewCardElement.reset();
    })
    .catch((err) => {
      console.log(err);
    });
}*/

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
  handleSubmitEditForm,
  handleSubmitAddForm,
  handleSubmitAddAvatar,
  setUserInfo,
  setUserAvatar,
};
