import {createElement} from '../util.js';

export default class FilmsListExtraSection {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return (`
     <section class="films-list--extra">
      </section>
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
