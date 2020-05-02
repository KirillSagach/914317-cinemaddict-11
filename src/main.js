let FILM_COUNT = 5;
let PREV_FILM_COUNT = 0;

import HeaderProfile from '../src/components/create-header-profile.js';
import MainNavigation from '../src/components/create-main-navigation.js';
import HeaderSort from '../src/components/create-sort.js';
import SectionFilms from '../src/components/create-section-films.js';
import FilmsListContainer from '../src/components/create-films-list-container.js';
import FilmsListExtraSection from '../src/components/create-films-list-extra-section.js';
import {createfilmsMockArray} from '../src/mocks/film-card.js';
import {createMainNavigationMockArray} from '../src/mocks/navigation.js';
import FilmMarkup from '../src/components/create-film-card.js';
import BtnLoadMore from '../src/components/create-btn-load-more.js';
import HeaderTopRated from '../src/components/create-header-top-rated.js';
import HeaderMostCommented from '../src/components/create-header-most-commented.js';
import FooterStatistics from '../src/components/create-footer-statistics.js';
import {renderElement, RenderPosition} from '../src/util.js';

const createFilmCard = (container, itemStart, itemEnd, filmsArray) => {
  for (let i = itemStart; i < itemEnd; i++) {
    const filmMarkup = new FilmMarkup(filmsArray[i]);
    renderElement(container, filmMarkup.getElement(), RenderPosition.BEFOREEND);
  }
};

const siteHeaderElement = document.querySelector(`.header`);
const headerProfile = new HeaderProfile();
renderElement(siteHeaderElement, headerProfile.getElement(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`.main`);
let mainNavigationMockArray = createMainNavigationMockArray(5);
const mainNavigation = new MainNavigation(mainNavigationMockArray);
renderElement(siteMainElement, mainNavigation.getElement(), RenderPosition.BEFOREEND);

const headerSort = new HeaderSort();
renderElement(siteMainElement, headerSort.getElement(), RenderPosition.BEFOREEND);

const sectionFilms = new SectionFilms();
renderElement(siteMainElement, sectionFilms.getElement(), RenderPosition.BEFOREEND);

const siteFilmsSection = siteMainElement.querySelector(`.films`);
const sitefilmsListSection = siteFilmsSection.querySelector(`.films-list`);

const filmsListContainer = new FilmsListContainer();
renderElement(sitefilmsListSection, filmsListContainer.getElement(), RenderPosition.BEFOREEND);

const siteFilmsListContainer = sitefilmsListSection.querySelector(`.films-list__container`);
let filmsMockArray = createfilmsMockArray(20);
createFilmCard(siteFilmsListContainer, PREV_FILM_COUNT, FILM_COUNT, filmsMockArray);

const btnLoadMore = new BtnLoadMore();
renderElement(sitefilmsListSection, btnLoadMore.getElement(), RenderPosition.BEFOREEND);

const showMore = sitefilmsListSection.querySelector(`.films-list__show-more`);
showMore.addEventListener(`click`, () =>{
  PREV_FILM_COUNT = FILM_COUNT;
  FILM_COUNT = FILM_COUNT + 5;
  createFilmCard(siteFilmsListContainer, PREV_FILM_COUNT, FILM_COUNT, filmsMockArray);
});

renderElement(siteFilmsSection, new FilmsListExtraSection().getElement(), RenderPosition.BEFOREEND);

const siteFilmsListExtraTopRated = siteFilmsSection.querySelector(`.films-list--extra`);
const headerTopRated = new HeaderTopRated();
renderElement(siteFilmsListExtraTopRated, headerTopRated.getElement(), RenderPosition.BEFOREEND);
renderElement(siteFilmsListExtraTopRated, new FilmsListContainer().getElement(), RenderPosition.BEFOREEND);

const sitefilmsListExtraTopRatedContainer = siteFilmsListExtraTopRated.querySelector(`.films-list__container`);
createFilmCard(sitefilmsListExtraTopRatedContainer, 0, 2, filmsMockArray.slice().sort((a, b) => a.rating < b.rating));

renderElement(siteFilmsSection, new FilmsListExtraSection().getElement(), RenderPosition.BEFOREEND);
const siteFilmsListExtraMostCom = siteFilmsSection.querySelectorAll(`.films-list--extra`);
let LastInd = siteFilmsListExtraMostCom.length - 1;
const headerMostCommented = new HeaderMostCommented();
renderElement(siteFilmsListExtraMostCom[LastInd], headerMostCommented.getElement(), RenderPosition.BEFOREEND);
renderElement(siteFilmsListExtraMostCom[LastInd], new FilmsListContainer().getElement(), RenderPosition.BEFOREEND);

const sitefilmsListExtraMostComContainer = siteFilmsListExtraMostCom[LastInd].querySelector(`.films-list__container`);
createFilmCard(sitefilmsListExtraMostComContainer, 0, 2, filmsMockArray.slice().sort((a, b) => a.comments < b.comments));

const siteFooter = document.querySelector(`.footer`);
const footerStatisticsArea = siteFooter.querySelector(`.footer__statistics`);
const footerStatistics = new FooterStatistics();
renderElement(footerStatisticsArea, footerStatistics.getElement(), RenderPosition.BEFOREEND);
