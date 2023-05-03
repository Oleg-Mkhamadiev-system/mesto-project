import { openPopupImages } from "./modal.js";
import { deleteCardLike, addlikeCard, deleteCard } from "./api.js";

// функция создания карточек
function createCard(name, link, userId, ownerId) {
  //const { link, name } = cardData;

  const templateElement = document.querySelector(".template__elements").content;
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
    handleCardLike(newCardElement);
  });

  // нахожу элемент подсчета лайков
  //const likeCount = newCardElement.querySelector(".elements__like-number");
  // передаю в свойство массива лайков цифру
  //countLikes.textContent = data.likes.length;

  const cardDeleteButton = newCardElement.querySelector(
    ".elements__delete-button"
  );

  // логика удаления корзинки карточки
  if (userId !== ownerId) {
    cardDeleteButton.remove();
  }
  cardDeleteButton.addEventListener("click", (evt) => {
    const cardElements = evt.target.closest(".elements__card");
    cardElements.remove();
  });

  return newCardElement;
}

function countLikes(newLike) {
  const likeCount = newCardElement.querySelector(".elements__like-number");
  const likes = newLike;
  likeCount.textContent = likes.length;
}

function setLike() {
  buttonLike.classList.add("elements__like-button_active");
}

// метод удаления лайка
function removeLike() {
  buttonLike.classList.remove("elements__like-button_active");
}

function toggleLikeState() {
  const like = !like;
}

function handleCardLike(newCardElement) {
  if (newCardElement.like) {
    deleteCardLike(newCardElement._id)
      .then((data) => {
        countLikes(data.likes);
        // меняю состояние лайков
        toggleLikeState();
        removeLike();
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    addlikeCard(newCardElement._id)
      .then((data) => {
        countLikes(data.likes);
        // меняю состояние лайков
        toggleLikeState();
        setLike();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export { createCard };
