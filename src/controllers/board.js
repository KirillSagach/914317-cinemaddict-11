let FILM_COUNT = 5;
let PREV_FILM_COUNT = 0;

import FilmsListContainer from '../components/create-films-list-container.js';
import FilmsListExtraSection from '../components/create-films-list-extra-section.js';
import BtnLoadMore from '../components/create-btn-load-more.js';
import HeaderMost from '../components/create-header-most.js';
import FilmMarkup from '../components/create-film-card.js';
import {renderElement, RenderPosition} from '../util.js';

const createFilmCard = (container, itemStart, itemEnd, filmsArray) => {
  for (let i = itemStart; i < itemEnd; i++) {
    const filmMarkup = new FilmMarkup(filmsArray[i]);
    renderElement(container, filmMarkup, RenderPosition.BEFOREEND);
  }
};
export default class PageController {

  constructor(container) {
    this._container = container;
    this._NewfilmsListContainer = new FilmsListContainer();
    this._NewfilmsListTopRatedContainer = new FilmsListContainer();
    this._NewfilmsListMostCommentedContainer = new FilmsListContainer();
    this._NewBtnLoadMore = new BtnLoadMore();
    this._NewSectionTopRated = new FilmsListExtraSection();
    this._NewSectionMostCommented = new FilmsListExtraSection();
    this._HeaderTopRated = new HeaderMost(`Top rated`);
    this._HeaderMostCommented = new HeaderMost(`Most commented`);
  }

  render(filmsMockArray) {
    const sitefilmsListSection = this._container.getElement().querySelector(`.films-list`);

    const filmsListContainer = this._NewfilmsListContainer;
    renderElement(sitefilmsListSection, filmsListContainer, RenderPosition.BEFOREEND);

    const siteFilmsListContainer = sitefilmsListSection.querySelector(`.films-list__container`);
    createFilmCard(siteFilmsListContainer, PREV_FILM_COUNT, FILM_COUNT, filmsMockArray);

    const btnLoadMore = this._NewBtnLoadMore;
    renderElement(sitefilmsListSection, btnLoadMore, RenderPosition.BEFOREEND);
    btnLoadMore.setClickHandler(() => {
      PREV_FILM_COUNT = FILM_COUNT;
      FILM_COUNT = FILM_COUNT + 5;
      createFilmCard(siteFilmsListContainer, PREV_FILM_COUNT, FILM_COUNT, filmsMockArray);
    });

    renderElement(this._container.getElement(), this._NewSectionTopRated, RenderPosition.BEFOREEND);

    const siteFilmsListExtraTopRated = this._container.getElement().querySelector(`.films-list--extra`);

    const headerTopRated = this._HeaderTopRated;
    renderElement(siteFilmsListExtraTopRated, headerTopRated, RenderPosition.BEFOREEND);
    renderElement(siteFilmsListExtraTopRated, this._NewfilmsListTopRatedContainer, RenderPosition.BEFOREEND);

    const sitefilmsListExtraTopRatedContainer = siteFilmsListExtraTopRated.querySelector(`.films-list__container`);
    createFilmCard(sitefilmsListExtraTopRatedContainer, 0, 2, filmsMockArray.slice().sort((a, b) => a.rating < b.rating));

    renderElement(this._container.getElement(), this._NewSectionMostCommented, RenderPosition.BEFOREEND);
    const siteFilmsListExtraMostCom = this._container.getElement().querySelectorAll(`.films-list--extra`);
    let LastInd = siteFilmsListExtraMostCom.length - 1;

    const headerMostCommented = this._HeaderMostCommented;
    renderElement(siteFilmsListExtraMostCom[LastInd], headerMostCommented, RenderPosition.BEFOREEND);
    renderElement(siteFilmsListExtraMostCom[LastInd], this._NewfilmsListMostCommentedContainer, RenderPosition.BEFOREEND);

    const sitefilmsListExtraMostComContainer = siteFilmsListExtraMostCom[LastInd].querySelector(`.films-list__container`);
    createFilmCard(sitefilmsListExtraMostComContainer, 0, 2, filmsMockArray.slice().sort((a, b) => a.comments < b.comments));

  }
}
