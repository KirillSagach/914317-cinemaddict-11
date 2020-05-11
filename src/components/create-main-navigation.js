import AbstractComponent from './abstract-component.js';

export default class MainNavigation extends AbstractComponent {
  constructor(mainNavigationMockArray) {
    super();
    this._mainNavigationMockArray = mainNavigationMockArray;
  }

  createItemMarkup({itemAnchor, itemClass, itemContent, isActive, isSpan, itemSpanClass, itemSpanContent}) {
    const activeClass = isActive ? `main-navigation__item--active` : ``;
    const spanTag = isSpan ? `<span class="${itemSpanClass}">${itemSpanContent}</span>` : ``;
    return `<a href="#${itemAnchor}" class="${itemClass} ${activeClass}">${itemContent} ${spanTag} </a>`;
  }

  getTemplate() {
    return (`
     <nav class="main-navigation">
      <div class="main-navigation__items">
        ${this._mainNavigationMockArray.map((it) => this.createItemMarkup(it)).join(`\n`)}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
     </nav>
  `);
  }
}
