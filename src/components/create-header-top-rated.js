const creatHeaderTopRatedMarkup = (topRatedHeader) => {
  return (`<h2 class="films-list__title">${topRatedHeader}</h2>`);
};

const createHeaderTopRated = () => {
  return (creatHeaderTopRatedMarkup(`Top rated`));
};

export {createHeaderTopRated};
