import AbstractComponent from './abstract-component.js';

export default class HeaderMostCommented extends AbstractComponent {
  constructor(header) {
    super();
    this._header = header;
  }

  getTemplate() {
    return `<h2 class="films-list__title">${this._header}</h2>`;
  }
}
