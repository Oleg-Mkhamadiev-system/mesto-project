export default class Section {
  constructor({ renderer }, containerSelector ) {
    this._renderer = renderer
    this._cardsContainer = document.querySelector(containerSelector)
  }

  renderItems(items) {
    items.forEach(element => {
      this._renderer(element)
    })
  }

  addItem(element) {
    this._cardsContainer.prepend(element)
  }
}