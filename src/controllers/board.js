import FilmsListContainer from '../components/create-films-list-container.js';
import FilmsListExtraSection from '../components/create-films-list-extra-section.js';
import BtnLoadMore from '../components/create-btn-load-more.js';
import HeaderMost from '../components/create-header-most.js';
import MovieController from "../controllers/MovieController.js";
import {renderElement, RenderPosition} from '../util.js';
import {SortType} from '../components/create-sort.js';

const getSortedFilms = (filmsArray, sortType, itemStart, itemEnd) => {
  let sortedFilms = [];
  const currentFilms = filmsArray.slice();

  switch (sortType) {
    case SortType.RATING:
      sortedFilms = currentFilms.sort((a, b) => a.rating < b.rating);
      break;
    case SortType.DATE:
      sortedFilms = currentFilms.sort((a, b) => a.year < b.year);
      break;
    case SortType.DEFAULT:
      sortedFilms = currentFilms;
      break;
  }
  return sortedFilms.slice(itemStart, itemEnd);
};

const createFilmCards = (container, filmsArray, onDataChange, onViewChange) => {
  return filmsArray.map((film) => {
    const NewMovieController = new MovieController(container, onDataChange, onViewChange);
    NewMovieController.render(film);
    return NewMovieController;
  });
};

export default class PageController {

  constructor(container, sortComponent) {
    this._container = container;
    this._films = [];
    this._showedFilms = [];
    this._NewfilmsListContainer = new FilmsListContainer();
    this._NewfilmsListTopRatedContainer = new FilmsListContainer();
    this._NewfilmsListMostCommentedContainer = new FilmsListContainer();
    this._NewBtnLoadMore = new BtnLoadMore();
    this._NewSectionTopRated = new FilmsListExtraSection();
    this._NewSectionMostCommented = new FilmsListExtraSection();
    this._HeaderTopRated = new HeaderMost(`Top rated`);
    this._HeaderMostCommented = new HeaderMost(`Most commented`);
    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
    this._FILM_COUNT = 5;
    this._PREV_FILM_COUNT = 0;
    this._sortComponent = sortComponent;
  }

  render(filmsMockArray) {
    this._films = filmsMockArray;

    const sitefilmsListSection = this._container.getElement().querySelector(`.films-list`);

    const filmsListContainer = this._NewfilmsListContainer;
    renderElement(sitefilmsListSection, filmsListContainer, RenderPosition.BEFOREEND);

    const siteFilmsListContainer = sitefilmsListSection.querySelector(`.films-list__container`);
    const NewFilms = createFilmCards(siteFilmsListContainer, this._films.slice(this._PREV_FILM_COUNT, this._FILM_COUNT), this._onDataChange, this._onViewChange);
    this._showedFilms = this._showedFilms.concat(NewFilms);

    this.renderBtnLoadMore(sitefilmsListSection, siteFilmsListContainer);
    this.renderToprated(this._films);
    this.renderMostCommented(this._films);
    this._sortComponent.setSortTypeChangeHandler((sortType)=>{
      const sortedFilms = getSortedFilms(this._films, sortType, 0, this._FILM_COUNT);
      siteFilmsListContainer.innerHTML = ``;
      createFilmCards(siteFilmsListContainer, sortedFilms.slice(0, this._FILM_COUNT), this._onDataChange, this._onViewChange);
    });
  }

  renderBtnLoadMore(sitefilmsListSection, siteFilmsListContainer) {
    const btnLoadMore = this._NewBtnLoadMore;
    renderElement(sitefilmsListSection, btnLoadMore, RenderPosition.BEFOREEND);
    btnLoadMore.setClickHandler(() => {
      this._PREV_FILM_COUNT = this._FILM_COUNT;
      this._FILM_COUNT = this._FILM_COUNT + 5;
      const newFilms = createFilmCards(siteFilmsListContainer, this._films.slice(this._PREV_FILM_COUNT, this._FILM_COUNT));
      this._showedFilms = this._showedFilms.concat(newFilms);
    });
  }

  renderToprated(filmsMockArray) {
    renderElement(this._container.getElement(), this._NewSectionTopRated, RenderPosition.BEFOREEND);

    const siteFilmsListExtraTopRated = this._container.getElement().querySelector(`.films-list--extra`);

    const headerTopRated = this._HeaderTopRated;
    renderElement(siteFilmsListExtraTopRated, headerTopRated, RenderPosition.BEFOREEND);
    renderElement(siteFilmsListExtraTopRated, this._NewfilmsListTopRatedContainer, RenderPosition.BEFOREEND);

    const sitefilmsListExtraTopRatedContainer = siteFilmsListExtraTopRated.querySelector(`.films-list__container`);
    const sortedFilms = filmsMockArray.sort((a, b) => a.rating < b.rating);
    createFilmCards(sitefilmsListExtraTopRatedContainer, sortedFilms.slice(0, 2));
  }

  renderMostCommented(filmsMockArray) {
    renderElement(this._container.getElement(), this._NewSectionMostCommented, RenderPosition.BEFOREEND);
    const siteFilmsListExtraMostCom = this._container.getElement().querySelectorAll(`.films-list--extra`);
    let LastInd = siteFilmsListExtraMostCom.length - 1;

    const headerMostCommented = this._HeaderMostCommented;
    renderElement(siteFilmsListExtraMostCom[LastInd], headerMostCommented, RenderPosition.BEFOREEND);
    renderElement(siteFilmsListExtraMostCom[LastInd], this._NewfilmsListMostCommentedContainer, RenderPosition.BEFOREEND);

    const sitefilmsListExtraMostComContainer = siteFilmsListExtraMostCom[LastInd].querySelector(`.films-list__container`);
    const sortedFilms = filmsMockArray.sort((a, b) => a.comments < b.comments);
    createFilmCards(sitefilmsListExtraMostComContainer, sortedFilms.slice(0, 2));
  }

  _onViewChange() {
    this._showedFilms.forEach((it) => it.setDefaultView());
  }

  _onDataChange(movieController, oldData, newData) {
    const index = this._films.findIndex((it) => it === oldData);

    if (index === -1) {
      return;
    }

    this._films = [].concat(this._films.slice(0, index), newData, this._films.slice(index + 1));
    movieController.render(this._films[index]);
  }
}
