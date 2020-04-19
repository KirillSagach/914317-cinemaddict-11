const createItemMarkup = (itemAnchor, itemClass, itemContent, isActive, isSpan, itemSpanClass, itemSpanContent) => {
  let activeClass = isActive ? `main-navigation__item--active` : ``;
  let spanTag = isSpan ? `<span class="${itemSpanClass}">${itemSpanContent}</span>` : ``;
  return (`
  <a href="#${itemAnchor}" class="${itemClass} ${activeClass}">${itemContent} ${spanTag} </a>`);
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
      itemSpanContent: ``,
    },
    {
      itemAnchor: `watchlist`,
      itemClass: `main-navigation__item`,
      isActive: false,
      itemContent: `Watchlist`,
      isSpan: true,
      itemSpanClass: `main-navigation__item-count`,
      itemSpanContent: `13`,
    },
    {
      itemAnchor: `history`,
      itemClass: `main-navigation__item`,
      isActive: false,
      itemContent: `History`,
      isSpan: true,
      itemSpanClass: `main-navigation__item-count`,
      itemSpanContent: `4`,
    },
    {
      itemAnchor: `favorites`,
      itemClass: `main-navigation__item`,
      isActive: false,
      itemContent: `Favorites`,
      isSpan: true,
      itemSpanClass: `main-navigation__item-count`,
      itemSpanContent: `8`,
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
