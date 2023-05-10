
import { submitButtonEdit,
  submitButtonAvatar,
  submitButtonCreateImage, } from "./constants.js"

export function disableButton(button) {
  button.disabled = true;
  button.classList.add("popup__save-button_disabled");
}

// функция кнопки загрузки
export function renderLoading(isLoading, button, buttonText='Сохранить', loadingText='Сохранение...') {
  if (isLoading) {
    button.textContent = loadingText
  } else {
    button.textContent = buttonText
  }
}
