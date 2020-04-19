const createSortMarkup = (sortBtn, isActive, textContent) => {
  let activeCLass = isActive ? `sort__button--active` : ``;
  return `<li><a href="#" class="${sortBtn} ${activeCLass}">${textContent}</a></li>`;
};

const createSort = () => {

  const sortMarkup = [
    {
      sortBtn: `sort__button`,
      isActive: true,
      textContent: `Sort by default`,
    },
    {
      sortBtn: `sort__button`,
      isActive: false,
      textContent: `Sort by date`,
    },
    {
      sortBtn: `sort__button`,
      isActive: false,
      textContent: `Sort by rating`,
    },
  ].map((it) => createSortMarkup(it.sortBtn, it.isActive, it.textContent)).join(`\n`);

  return (`
    <ul class="sort">
      ${sortMarkup}
    </ul>
    `);
};

export {createSort};
