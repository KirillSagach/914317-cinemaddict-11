import {createElement} from '../util.js';

export default class HeaderMostCommented {
  constructor(header) {
    this._element = null;
    this._header = header;
  }

  getTemplate() {
    return `<h2 class="films-list__title">${this._header}</h2>`;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate().trim());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
