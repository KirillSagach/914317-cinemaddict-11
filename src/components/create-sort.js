import AbstractComponent from './abstract-component.js';

export const SortType = {
  RATING: `rating`,
  DATE: `date`,
  DEFAULT: `default`,
};

const createSortMarkup = ({sortBtn, sortType, isActive, textContent}) => {
  let activeCLass = isActive ? `sort__button--active` : ``;
  return `<li><a href="#" data-sort-type="${sortType}" class="${sortBtn} ${activeCLass}">${textContent}</a></li>`;
};

export default class HeaderSort extends AbstractComponent {

  constructor() {
    super();

    this._currentSortType = SortType.DEFAULT;
  }

  getTemplate() {
    const sortMarkup = [
      {
        sortBtn: `sort__button`,
        sortType: SortType.DEFAULT,
        isActive: true,
        textContent: `Sort by default`,
      },
      {
        sortBtn: `sort__button`,
        sortType: SortType.DATE,
        isActive: false,
        textContent: `Sort by date`,
      },
      {
        sortBtn: `sort__button`,
        sortType: SortType.RATING,
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

  getSortType() {
    return this._currentSortType;
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;

      handler(this._currentSortType);
    });
  }
}
