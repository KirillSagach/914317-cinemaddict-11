import {createElement} from '../util.js';

const creatHeaderTopRatedMarkup = (topRatedHeader) => {
  return (`<h2 class="films-list__title">${topRatedHeader}</h2>`);
};

export default class HeaderTopRated {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return creatHeaderTopRatedMarkup(`Top rated`);
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

