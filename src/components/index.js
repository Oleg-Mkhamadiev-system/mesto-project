import {
  profileEditButton,
  profileAddButton,
  popupButtonCloseList,
  formEditElement,
  formNewCardElement,
  popupElementList,
  cardsContainer,
  validationConfig,
  initialCards
} from "./utils.js";
import { enableValidation } from "./validate.js";

import { createCard } from "./card.js";
import { openEditPopup,
  openAddPopup,
  closePopup,
  handleSubmitEditForm,
  handleSubmitAddForm,
} from './modal.js';

import "../pages/index.css";

initialCards.forEach((data) => {
  const newCard = createCard(data);
  cardsContainer.prepend(newCard);
});

// обработчики на открытие попапов
profileEditButton.addEventListener("click", openEditPopup);
profileAddButton.addEventListener("click", openAddPopup);

// обработчики на сабмитные кнопки
formEditElement.addEventListener("submit", handleSubmitEditForm);
formNewCardElement.addEventListener("submit", handleSubmitAddForm);

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
