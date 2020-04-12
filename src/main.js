const FILMS_LIST_COUNT = 5;

import {createHeaderProfile} from '../src/components/createHeaderProfile.js';
import {createMainNavigation} from '../src/components/createMainNavigation.js';
import {createSort} from '../src/components/createSort.js';
import {createSectionFilms} from '../src/components/createSectionFilms.js';
import {createHeader} from '../src/components/createHeader.js';
import {createHeaderTopRated} from '../src/components/createHeaderTopRated.js';
import {createHeaderMostCommented} from '../src/components/createHeaderMostCommented.js';
import {createFilmsListContainer} from '../src/components/createFilmsListContainer.js';
import {createFilmsListExtraSection} from '../src/components/createFilmsListExtraSection.js';
import {createFilmCard} from '../src/components/createFilmCard.js';
import {createBtnLoadMore} from '../src/components/createBtnLoadMore.js';
import {createFooterStatistics} from '../src/components/createFooterStatistics.js';

const filmsArray = [
  {Title: `The Dance of Life`, Rating: `8.3`, Year: `1929`, Duration: `1h 55m`, Genre: `Musical`, SrcPic: `"./images/posters/the-dance-of-life.jpg"`, Description: `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`, Comments: `5 comments`, ActiveWatchlist: ``, ActiveWatched: ``, ActiveFavourite: ``},
  {Title: `Sagebrush Trail`, Rating: `3.2`, Year: `1933`, Duration: `54m`, Genre: `Western`, SrcPic: `"./images/posters/sagebrush-trail.jpg"`, Description: `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brants narrow escap…`, Comments: `89 comments`, ActiveWatchlist: `film-card__controls-item--active`, ActiveWatched: ``, ActiveFavourite: ``},
  {Title: `The Man with the Golden Arm`, Rating: `9.0`, Year: `1955`, Duration: `1h 59m`, Genre: `Drama`, SrcPic: `"./images/posters/the-man-with-the-golden-arm.jpg"`, Description: `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`, Comments: `18 comments`, ActiveWatchlist: ``, ActiveWatched: `film-card__controls-item--active`, ActiveFavourite: ``},
  {Title: `Santa Claus Conquers the Martians`, Rating: `2.3`, Year: `1964`, Duration: `1h 21m`, Genre: `Comedy`, SrcPic: `"./images/posters/santa-claus-conquers-the-martians.jpg"`, Description: `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`, Comments: `465 comments`, ActiveWatchlist: ``, ActiveWatched: ``, ActiveFavourite: `film-card__controls-item--active`},
  {Title: `Popeye the Sailor Meets Sindbad the Sailor`, Rating: `6.3`, Year: `1936`, Duration: `16m`, Genre: `Cartoon`, SrcPic: `"./images/posters/popeye-meets-sinbad.png"`, Description: `In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…`, Comments: `0 comments`, ActiveWatchlist: `film-card__controls-item--active`, ActiveWatched: `film-card__controls-item--active`, ActiveFavourite: `film-card__controls-item--active`},
];

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createHeaderProfile(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createMainNavigation(), `beforeend`);
render(siteMainElement, createSort(), `beforeend`);
render(siteMainElement, createSectionFilms(), `beforeend`);

const siteFilmsSection = siteMainElement.querySelector(`.films`);
const sitefilmsListSection = siteFilmsSection.querySelector(`.films-list`);
render(sitefilmsListSection, createHeader(), `beforeend`);
render(sitefilmsListSection, createFilmsListContainer(), `beforeend`);

const siteFilmsListContainer = sitefilmsListSection.querySelector(`.films-list__container`);
for (let i = 0; i < FILMS_LIST_COUNT; i++) {
  render(siteFilmsListContainer, createFilmCard(
      filmsArray[i].Title,
      filmsArray[i].Rating,
      filmsArray[i].Year,
      filmsArray[i].Duration,
      filmsArray[i].Genre,
      filmsArray[i].SrcPic,
      filmsArray[i].Description,
      filmsArray[i].Comments,
      filmsArray[i].ActiveWatchlist,
      filmsArray[i].ActiveWatched,
      filmsArray[i].ActiveFavourite),
  `beforeend`);
}
render(sitefilmsListSection, createBtnLoadMore(), `beforeend`);

render(siteFilmsSection, createFilmsListExtraSection(), `beforeend`);
const siteFilmsListExtraTopRated = siteFilmsSection.querySelector(`.films-list--extra`);
render(siteFilmsListExtraTopRated, createHeaderTopRated(), `beforeend`);
render(siteFilmsListExtraTopRated, createFilmsListContainer(), `beforeend`);

const sitefilmsListExtraTopRatedContainer = siteFilmsListExtraTopRated.querySelector(`.films-list__container`);
for (let i = 0; i < 2; i++) {
  render(sitefilmsListExtraTopRatedContainer, createFilmCard(
      filmsArray[i].Title,
      filmsArray[i].Rating,
      filmsArray[i].Year,
      filmsArray[i].Duration,
      filmsArray[i].Genre,
      filmsArray[i].SrcPic,
      filmsArray[i].Description,
      filmsArray[i].Comments,
      filmsArray[i].ActiveWatchlist,
      filmsArray[i].ActiveWatched,
      filmsArray[i].ActiveFavourite),
  `beforeend`);
}

render(siteFilmsSection, createFilmsListExtraSection(), `beforeend`);
const siteFilmsListExtraMostCom = siteFilmsSection.querySelectorAll(`.films-list--extra`);
let LastInd = siteFilmsListExtraMostCom.length - 1;
render(siteFilmsListExtraMostCom[LastInd], createHeaderMostCommented(), `beforeend`);
render(siteFilmsListExtraMostCom[LastInd], createFilmsListContainer(), `beforeend`);

const sitefilmsListExtraMostComContainer = siteFilmsListExtraMostCom[LastInd].querySelector(`.films-list__container`);
for (let i = 0; i < 2; i++) {
  render(sitefilmsListExtraMostComContainer, createFilmCard(
      filmsArray[i].Title,
      filmsArray[i].Rating,
      filmsArray[i].Year,
      filmsArray[i].Duration,
      filmsArray[i].Genre,
      filmsArray[i].SrcPic,
      filmsArray[i].Description,
      filmsArray[i].Comments,
      filmsArray[i].ActiveWatchlist,
      filmsArray[i].ActiveWatched,
      filmsArray[i].ActiveFavourite),
  `beforeend`);
}

const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
render(footerStatistics, createFooterStatistics(), `beforeend`);
