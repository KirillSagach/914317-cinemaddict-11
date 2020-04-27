const createFilmMarkup = ({title, rating, year, duration, genre, srcPic, description, comments, activeWatchlist, activeWatched, activeFavourite}) => {
  const itemActive = `film-card__controls-item--active`;
  const activeWatchlistMarkup = activeWatchlist ? itemActive : ``;
  const activeWatchedMarkup = activeWatched ? itemActive : ``;
  const activeFavouriteMarkup = activeFavourite ? itemActive : ``;

  return (`
    <article class="film-card">
    <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genre}</span>
          </p>
          <img src="${srcPic}" alt="" class="film-card__poster">
          <p class="film-card__description">${description}</p>
          <a class="film-card__comments">${comments} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${activeWatchlistMarkup}">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${activeWatchedMarkup}">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${activeFavouriteMarkup}">Mark as favorite</button>
          </form>
     </article>`);
};

export {createFilmMarkup};