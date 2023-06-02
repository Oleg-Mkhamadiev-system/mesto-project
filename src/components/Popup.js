export default class Popup {
  constructor(popupSelector) {
    this._popupElement = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handlePopupOverlayClose(evt) {
    if (evt.target.classList.contains('popup__overlay')) {
      this.close();
    };
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popupElement.querySelector('.popup__close-button')
    .addEventListener('click', () => {
      this.close();
    });

    this._popupElement.addEventListener('mousedown', (evt) => {
      this._handlePopupOverlayClose(evt);
    });
  }
}
