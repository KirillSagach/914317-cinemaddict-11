const createHeaderMostCommentedMarkup = (header) => {
  return (`<h2 class="films-list__title">${header}</h2>`);
};

const createHeaderMostCommented = () => {
  return (createHeaderMostCommentedMarkup(`Most commented`));
};

export {createHeaderMostCommented};
