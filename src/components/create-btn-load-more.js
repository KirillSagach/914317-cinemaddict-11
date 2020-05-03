import {createElement} from '../util.js';

export default class BtnLoadMore {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return (`
    <button class="films-list__show-more">Show more</button>
  `);
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

