import { openPopupImages } from './modal.js';

// функция создания карточек
function createCard(cardData) {
  const { link, name } = cardData;

  const templateElement = document.querySelector('.template__elements').content;
  const newCardElement = templateElement
    .querySelector(".elements__card")
    .cloneNode(true);

  newCardElement.querySelector(".elements__card-text").textContent = name;
  const cardImageElement = newCardElement.querySelector(
    ".elements__card-image"
  );

  cardImageElement.src = link;
  cardImageElement.alt = name;
  cardImageElement.addEventListener("click", () => {
    openPopupImages(name, link);
  });

  const buttonLike = newCardElement.querySelector(".elements__like-button");

  buttonLike.addEventListener("click", () => {
    buttonLike.classList.toggle("elements__like-button_active");
  });

  const cardDeleteButton = newCardElement.querySelector(
    ".elements__delete-button"
  );

  cardDeleteButton.addEventListener("click", (evt) => {
    const cardElements = evt.target.closest(".elements__card");

    cardElements.remove();
  });

  return newCardElement;
}

export { createCard };
