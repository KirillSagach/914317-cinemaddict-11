const createFilmMarkup = (Title, Rating, Year, Duration, Genre, Src, Description, Comments, ActiveWatchlist, ActiveWatched, ActiveFavourite) => {
  let itemActive = `film-card__controls-item--active`;
  let activeWatchlistMarkup = ActiveWatchlist ? itemActive : ``;
  let activeWatchedMarkup = ActiveWatched ? itemActive : ``;
  let activeFavouriteMarkup = ActiveFavourite ? itemActive : ``;

  return (`
    <article class="film-card">
    <h3 class="film-card__title">${Title}</h3>
          <p class="film-card__rating">${Rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${Year}</span>
            <span class="film-card__duration">${Duration}</span>
            <span class="film-card__genre">${Genre}</span>
          </p>
          <img src="${Src}" alt="" class="film-card__poster">
          <p class="film-card__description">${Description}</p>
          <a class="film-card__comments">${Comments}</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${activeWatchlistMarkup}">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${activeWatchedMarkup}">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${activeFavouriteMarkup}">Mark as favorite</button>
          </form>
     </article>`);
};

const createMostCommentedFilmCard = () => {
  const filmsMarkup = [
    {
      Title: `The Dance of Life`,
      Rating: `8.3`,
      Year: `1929`,
      Duration: `1h 55m`,
      Genre: `Musical`,
      SrcPic: `./images/posters/the-dance-of-life.jpg`,
      Description: `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
      Comments: `5 comments`,
      ActiveWatchlist: false,
      ActiveWatched: false,
      ActiveFavourite: false,
    },
    {
      Title: `Sagebrush Trail`,
      Rating: `3.2`,
      Year: `1933`,
      Duration: `54m`,
      Genre: `Western`,
      SrcPic: `./images/posters/sagebrush-trail.jpg`,
      Description: `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brants narrow escap…`,
      Comments: `89 comments`,
      ActiveWatchlist: true,
      ActiveWatched: false,
      ActiveFavourite: false,
    },
  ].map((it)=>createFilmMarkup(it.Title, it.Rating, it.Year, it.Duration, it.Genre, it.SrcPic, it.Description,
      it.Comments, it.ActiveWatchlist, it.ActiveWatched, it.ActiveFavourite)).join(`\n`);

  return (filmsMarkup);
};

export {createMostCommentedFilmCard};
