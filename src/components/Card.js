import { openPopupImages } from "./modal.js";
import { deleteCardLike, addlikeCard, deleteCard } from "./api.js";

// функция создания карточек
function createCard(name, link, id, ownerId, likes) {
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
  // нахожу элемент подсчета лайков
  const likeCount = newCardElement.querySelector(".elements__like-number");
  // передаю в свойство массива лайков цифру
  likeCount.textContent = likes.length;

  buttonLike.addEventListener("click", (evt) => {
    buttonLike.dataset.id = id; // устанавливаю айди для кнопки лайка
    if (evt.target.classList.toggle("elements__like-button_active")) {
      addlikeCard(id)
        .then(() => {
          // обновляю количество лайков, увеличивая массив лайков
          likeCount.textContent =+ likeCount.textContent + 1;
          buttonLike.classList.add("elements__like-button_active");
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      deleteCardLike(id)
        .then(() => {
          // обновляю количество лайков, уменьшая массив лайков
          likeCount.textContent =+ likeCount.textContent - 1;
          buttonLike.classList.remove("elements__like-button_active");
        })
        .catch((err) => {
          console.log(err);
        })
    }
  });

  const cardDeleteButton = newCardElement.querySelector(
    ".elements__delete-button"
  );

  // логика удаления корзинки карточки
  if (id !== ownerId) {
    cardDeleteButton.remove();
  }

  cardDeleteButton.addEventListener("click", (evt) => {
    const cardElements = evt.target.closest(".elements__card");
    cardElements.dataset.id = id;
    deleteCard(id)
    .then(() => {
      cardElements.remove();
    }).catch((err) => {
      console.log(err);
    })

  });

  return newCardElement;
}


export { createCard };
