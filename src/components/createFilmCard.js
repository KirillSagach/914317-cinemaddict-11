const createFilmCard = (Title, Rating, Year, Duration, Genre, Src, Description, Comments, ActiveWatchlist, ActiveWatched, ActiveFavourite) => {
  return (`
        <article class="film-card">
          <h3 class="film-card__title">${Title}</h3>
          <p class="film-card__rating">${Rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${Year}</span>
            <span class="film-card__duration">${Duration}</span>
            <span class="film-card__genre">${Genre}</span>
          </p>
          <img src=${Src} alt="" class="film-card__poster">
          <p class="film-card__description">${Description}</p>
          <a class="film-card__comments">${Comments}</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${ActiveWatchlist}">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${ActiveWatched}">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${ActiveFavourite}">Mark as favorite</button>
          </form>
        </article>
  `);
};

export {createFilmCard};
