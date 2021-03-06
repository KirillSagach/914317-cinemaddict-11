import FilmMarkup from '../components/create-film-card.js';
import PopUp from '../components/create-pop-up.js';
import {renderElement, RenderPosition, replace} from '../util.js';

export default class MovieController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;
    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;
    this._oldFilmComponent = null;
    this._oldPopUp = null;
  }

  setDefaultView() {
    this._onViewChange();
    this._oldPopUp.getElement().remove();
  }

  render(filmData) {
    this._oldFilmComponent = this._filmMarkup;
    this._oldPopUp = this._NewPopUp;
    this._filmMarkup = new FilmMarkup(filmData);
    this._NewPopUp = new PopUp(filmData);

    this._filmMarkup.setAddToFavourites((evt) => {
      evt.preventDefault();
      this._onDataChange(this, filmData, Object.assign({}, filmData, {activeFavourite: !filmData.activeFavourite}));
    });

    this._filmMarkup.setAddToWatchList((evt) => {
      evt.preventDefault();
      this._onDataChange(this, filmData, Object.assign({}, filmData, {activeWatchlist: !filmData.activeWatchlist}));
    });

    this._filmMarkup.setAlreadyWatched((evt) => {
      evt.preventDefault();
      this._onDataChange(this, filmData, Object.assign({}, filmData, {activeWatched: !filmData.activeWatched}));
    });

    if (this._oldFilmComponent && this._oldPopUp) {
      replace(this._filmMarkup, this._oldFilmComponent);
      replace(this._NewPopUp, this._oldPopUp);
    } else {
      renderElement(this._container, this._filmMarkup, RenderPosition.BEFOREEND);

      this._filmMarkup.getPopUp(() => {
        const bodyArea = document.querySelector(`body`);
        renderElement(bodyArea, this._NewPopUp, RenderPosition.BEFOREEND);
        this._NewPopUp.setClosePopUpHandler();
        this._NewPopUp.setEmojiToComment();
      });
    }
  }
}
