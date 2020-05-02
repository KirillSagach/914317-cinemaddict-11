import {createElement} from '../util.js';

const createHeaderMostCommentedMarkup = (header) => {
  return (`<h2 class="films-list__title">${header}</h2>`);
};

export default class HeaderMostCommented {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createHeaderMostCommentedMarkup(`Most commented`);
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
