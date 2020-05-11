import AbstractComponent from './abstract-component.js';

const createSortMarkup = ({sortBtn, isActive, textContent}) => {
  let activeCLass = isActive ? `sort__button--active` : ``;
  return `<li><a href="#" class="${sortBtn} ${activeCLass}">${textContent}</a></li>`;
};

export default class HeaderSort extends AbstractComponent {

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
}
