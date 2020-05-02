import {createElement} from '../util.js';

const createSortMarkup = ({sortBtn, isActive, textContent}) => {
  let activeCLass = isActive ? `sort__button--active` : ``;
  return `<li><a href="#" class="${sortBtn} ${activeCLass}">${textContent}</a></li>`;
};

export default class HeaderSort {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    const sortMarkup = [
      {
        sortBtn: `sort__button`,
        isActive: true,
        textContent: `Sort by default`,
      },
      {
        sortBtn: `sort__button`,
        isActive: false,
        textContent: `Sort by date`,
      },
      {
        sortBtn: `sort__button`,
        isActive: false,
        textContent: `Sort by rating`,
      },
    ].map((it) => createSortMarkup(it)).join(`\n`);

    return (`
    <ul class="sort">
      ${sortMarkup}
    </ul>
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
