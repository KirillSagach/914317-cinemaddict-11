const createItemMarkup = ({itemAnchor, itemClass, itemContent, isActive, isSpan, itemSpanClass, itemSpanContent}) => {
  const activeClass = isActive ? `main-navigation__item--active` : ``;
  const spanTag = isSpan ? `<span class="${itemSpanClass}">${itemSpanContent}</span>` : ``;
  return `<a href="#${itemAnchor}" class="${itemClass} ${activeClass}">${itemContent} ${spanTag} </a>`;
};

const createMainNavigation = (mainNavigationMockArray) => {

  return (`
   <nav class="main-navigation">
    <div class="main-navigation__items">
      ${mainNavigationMockArray.map((it) => createItemMarkup(it)).join(`\n`)}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>
  `);
};

export {createMainNavigation};
