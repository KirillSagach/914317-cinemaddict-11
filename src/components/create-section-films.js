import {createElement} from '../util.js';

export default class SectionFilms {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return (`
    <section class="films">
      <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      </section>
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

