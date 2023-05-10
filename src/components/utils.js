
import { submitButtonEdit,
  submitButtonAvatar,
  submitButtonCreateImage, } from "./constants.js"

export function disableButton(button) {
  button.disabled = true;
  button.classList.add("popup__save-button_disabled");
}

// функция кнопки загрузки
export function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    submitButtonEdit.textContent = "Сохранить";
    submitButtonAvatar.textContent = "Сохранить";
    submitButtonCreateImage.textContent = "Создать";
  }
}
