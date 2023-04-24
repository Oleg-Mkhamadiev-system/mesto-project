
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
  cardsContainer,
  formNewCardElement
} from "./utils.js";
import { createCard } from "./card.js";

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

function handleSubmitEditForm(evt) {
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
  closePopup,
  openPopupImages,
  handleSubmitEditForm,
  handleSubmitAddForm,
};
