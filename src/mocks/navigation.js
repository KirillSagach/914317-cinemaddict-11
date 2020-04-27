const createRandomIntNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createBoolean = () => {
  return (Math.floor(Math.random() * 2) === 0);
};

const ITEM_ANCHOR = [`all`,
  `watchlist`,
  `history`,
  `favourites`,
  `cartoon`,
];

const ITEM_SPAN_CLASS = [`main-navigation__item-count`,
  ``,
];

const ITEM_CONTENT = [
  `All`,
  `Watchlist`,
  `History`,
  `Favourites`,
  `Cartoon`,
];

const createMainNavigationMockArray = (maxItems) => {
  let MainNavigationMockArray = [];
  for (let i = 0; i <= maxItems; i++) {
    MainNavigationMockArray.push({
      itemAnchor: ITEM_ANCHOR[createRandomIntNumber(0, 4)],
      itemClass: `main-navigation__item`,
      isActive: createBoolean(),
      itemContent: ITEM_CONTENT[createRandomIntNumber(0, 4)],
      isSpan: createBoolean(),
      itemSpanClass: ITEM_SPAN_CLASS[createRandomIntNumber(0, 1)],
      itemSpanContent: createRandomIntNumber(1, 9),
    });
  }
  return MainNavigationMockArray;
};

export {createMainNavigationMockArray};
