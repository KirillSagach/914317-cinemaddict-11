import AbstractComponent from './abstract-component.js';

export default class FilmsListExtraSection extends AbstractComponent {

  getTemplate() {
    return (`
     <section class="films-list--extra">
      </section>
  `);
  }
}
