let FILM_COUNT = 5;
let PREV_FILM_COUNT = 0;

import {createHeaderProfile} from '../src/components/create-header-profile.js';
import {createMainNavigation} from '../src/components/create-main-navigation.js';
import {createSort} from '../src/components/create-sort.js';
import {createSectionFilms} from '../src/components/create-section-films.js';
import {createFilmsListContainer} from '../src/components/create-films-list-container.js';
import {createFilmsListExtraSection} from '../src/components/create-films-list-extra-section.js';
import {createfilmsMockArray} from '../src/mocks/film-card.js';
import {createMainNavigationMockArray} from '../src/mocks/navigation.js';
import {createFilmMarkup} from '../src/components/create-film-card.js';
import {createBtnLoadMore} from '../src/components/create-btn-load-more.js';
import {createHeaderTopRated} from '../src/components/create-header-top-rated.js';
import {createHeaderMostCommented} from '../src/components/create-header-most-commented.js';
import {createFooterStatistics} from '../src/components/create-footer-statistics.js';


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createFilmCard = (itemStart, itemEnd, filmsMarkup) => {
  return filmsMarkup.slice(itemStart, itemEnd).map((it) => createFilmMarkup(it)).join(`\n`);
};

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createHeaderProfile(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
let mainNavigationMockArray = createMainNavigationMockArray(5);
render(siteMainElement, createMainNavigation(mainNavigationMockArray), `beforeend`);
render(siteMainElement, createSort(), `beforeend`);
render(siteMainElement, createSectionFilms(), `beforeend`);

const siteFilmsSection = siteMainElement.querySelector(`.films`);
const sitefilmsListSection = siteFilmsSection.querySelector(`.films-list`);
render(sitefilmsListSection, createFilmsListContainer(), `beforeend`);

const siteFilmsListContainer = sitefilmsListSection.querySelector(`.films-list__container`);
let filmsMockArray = createfilmsMockArray(20);
render(siteFilmsListContainer, createFilmCard(PREV_FILM_COUNT, FILM_COUNT, filmsMockArray), `beforeend`);
render(sitefilmsListSection, createBtnLoadMore(), `beforeend`);

const btnLoadMore = sitefilmsListSection.querySelector(`.films-list__show-more`);
btnLoadMore.addEventListener(`click`, () =>{
  PREV_FILM_COUNT = FILM_COUNT;
  FILM_COUNT = FILM_COUNT + 5;
  render(siteFilmsListContainer, createFilmCard(PREV_FILM_COUNT, FILM_COUNT, filmsMockArray), `beforeend`);
});

render(siteFilmsSection, createFilmsListExtraSection(), `beforeend`);
const siteFilmsListExtraTopRated = siteFilmsSection.querySelector(`.films-list--extra`);
render(siteFilmsListExtraTopRated, createHeaderTopRated(), `beforeend`);
render(siteFilmsListExtraTopRated, createFilmsListContainer(), `beforeend`);
const sitefilmsListExtraTopRatedContainer = siteFilmsListExtraTopRated.querySelector(`.films-list__container`);
render(sitefilmsListExtraTopRatedContainer, createFilmCard(0, 2, filmsMockArray.slice().sort((a, b) => a.rating < b.rating)), `beforeend`);

render(siteFilmsSection, createFilmsListExtraSection(), `beforeend`);
const siteFilmsListExtraMostCom = siteFilmsSection.querySelectorAll(`.films-list--extra`);
let LastInd = siteFilmsListExtraMostCom.length - 1;
render(siteFilmsListExtraMostCom[LastInd], createHeaderMostCommented(), `beforeend`);
render(siteFilmsListExtraMostCom[LastInd], createFilmsListContainer(), `beforeend`);
const sitefilmsListExtraMostComContainer = siteFilmsListExtraMostCom[LastInd].querySelector(`.films-list__container`);
render(sitefilmsListExtraMostComContainer, createFilmCard(0, 2, filmsMockArray.slice().sort((a, b) => a.comments < b.comments)), `beforeend`);

const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
render(footerStatistics, createFooterStatistics(), `beforeend`);
