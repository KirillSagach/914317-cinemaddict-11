import AbstractComponent from './abstract-component.js';

export default class BtnLoadMore extends AbstractComponent {

  getTemplate() {
    return (`
    <button class="films-list__show-more">Show more</button>
  `);
  }

  setClickHandler(btnAct) {
    this.getElement().addEventListener(`click`, btnAct);
  }
}

