
import HeaderProfile from '../src/components/create-header-profile.js';
import MainNavigation from '../src/components/create-main-navigation.js';
import HeaderSort from '../src/components/create-sort.js';
import SectionFilms from '../src/components/create-section-films.js';
import {createfilmsMockArray} from '../src/mocks/film-card.js';
import {createMainNavigationMockArray} from '../src/mocks/navigation.js';
import FooterStatistics from '../src/components/create-footer-statistics.js';
import {renderElement, RenderPosition} from '../src/util.js';
import PageController from "../src/controllers/board.js";

let mainNavigationMockArray = createMainNavigationMockArray(5);
let filmsMockArray = createfilmsMockArray(20);

const siteHeaderElement = document.querySelector(`.header`);
const headerProfile = new HeaderProfile();
renderElement(siteHeaderElement, headerProfile, RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`.main`);
const mainNavigation = new MainNavigation(mainNavigationMockArray);
renderElement(siteMainElement, mainNavigation, RenderPosition.BEFOREEND);

const headerSort = new HeaderSort();
renderElement(siteMainElement, headerSort, RenderPosition.BEFOREEND);

const sectionFilms = new SectionFilms();
renderElement(siteMainElement, sectionFilms, RenderPosition.BEFOREEND);

const pageController = new PageController(sectionFilms, headerSort);
pageController.render(filmsMockArray);

const siteFooter = document.querySelector(`.footer`);
const footerStatisticsArea = siteFooter.querySelector(`.footer__statistics`);
const footerStatistics = new FooterStatistics();
renderElement(footerStatisticsArea, footerStatistics, RenderPosition.BEFOREEND);
