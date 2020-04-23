const createItemMarkup = (itemAnchor, itemClass, itemContent, isActive, isSpan, itemSpanClass, itemSpanContent) => {
  const activeClass = isActive ? `main-navigation__item--active` : ``;
  const spanTag = isSpan ? `<span class="${itemSpanClass}">${itemSpanContent}</span>` : ``;
  return `<a href="#${itemAnchor}" class="${itemClass} ${activeClass}">${itemContent} ${spanTag} </a>`;
};

const createRandomIntNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createMainNavigation = () => {

  const itemsMarkup = [
    {
      itemAnchor: `all`,
      itemClass: `main-navigation__item`,
      isActive: true,
      itemContent: `All movies`,
      isSpan: false,
      itemSpanClass: ``,
      itemSpanContent: createRandomIntNumber(1, 9),
    },
    {
      itemAnchor: `watchlist`,
      itemClass: `main-navigation__item`,
      isActive: false,
      itemContent: `Watchlist`,
      isSpan: true,
      itemSpanClass: `main-navigation__item-count`,
      itemSpanContent: createRandomIntNumber(1, 9),
    },
    {
      itemAnchor: `history`,
      itemClass: `main-navigation__item`,
      isActive: false,
      itemContent: `History`,
      isSpan: true,
      itemSpanClass: `main-navigation__item-count`,
      itemSpanContent: createRandomIntNumber(1, 9),
    },
    {
      itemAnchor: `favorites`,
      itemClass: `main-navigation__item`,
      isActive: false,
      itemContent: `Favorites`,
      isSpan: true,
      itemSpanClass: `main-navigation__item-count`,
      itemSpanContent: createRandomIntNumber(1, 9),
    },
  ].map((it) => createItemMarkup(it.itemAnchor, it.itemClass, it.itemContent, it.isActive, it.isSpan, it.itemSpanClass, it.itemSpanContent)).join(`\n`);

  return (`
   <nav class="main-navigation">
    <div class="main-navigation__items">
      ${itemsMarkup}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>
  `);
};

export {createMainNavigation};
