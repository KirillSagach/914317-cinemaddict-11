import AbstractComponent from './abstract-component.js';

export default class FooterStatistics extends AbstractComponent {

  getTemplate() {
    return (`
    <p>130 291 movies inside</p>
    `);
  }

}
