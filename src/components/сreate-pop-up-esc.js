import AbstractComponent from './abstract-component.js';

export default class PopUpEscBtn extends AbstractComponent {

  getTemplate() {
    return `
        <button class="film-details__close-btn" type="button">close</button>
`;
  }

  setCloseBtn(btnAct) {
    this.getElement().addEventListener(`click`, btnAct);
  }
}
