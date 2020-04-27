const createRandomIntNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createRandomNumder = (min, max) => {
  return Math.random() * (max - min) + min;
};

const createBoolean = () => {
  return (Math.floor(Math.random() * 2) === 0);
};

const TITLES = [`The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `Leon King`
];

const GENRES = [`Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`
];

const DURATIONS = [
  `1h 55m`,
  `16m`,
  `1h 21m`,
  `1h 59m`,
  `54m`
];

const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const DESCRIPTION_ARRAY = DESCRIPTION.split(`.`);

const createDescription = () => {
  let min = createRandomIntNumber(0, DESCRIPTION_ARRAY.length - 2);
  let max = min + 4;
  max = max > DESCRIPTION_ARRAY.length - 1 ? DESCRIPTION_ARRAY.length - 1 : max;
  let newDescription = ``;
  for (let i = min; i <= max; i++) {
    if (i !== min && newDescription !== ``) {
      newDescription = newDescription + `. `;
    }
    newDescription = newDescription + DESCRIPTION_ARRAY[i];
  }
  return newDescription;
};

const SRC_PICS = [`./images/posters/popeye-meets-sinbad.png`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/the-man-with-the-golden-arm.jpg`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/the-dance-of-life.jpg`
];

const createfilmsMockArray = (maxItems) => {
  let filmsArray = [];
  for (let i = 0; i <= maxItems; i++) {
    filmsArray.push({
      title: TITLES[createRandomIntNumber(0, 5)],
      rating: Math.floor(createRandomNumder(2, 9) * 10) / 10,
      year: createRandomIntNumber(1900, 2020),
      duration: DURATIONS[createRandomIntNumber(0, 4)],
      genre: GENRES[createRandomIntNumber(0, 4)],
      srcPic: SRC_PICS[createRandomIntNumber(0, 4)],
      description: createDescription(),
      comments: createRandomIntNumber(1, 99),
      activeWatchlist: createBoolean(),
      activeWatched: createBoolean(),
      activeFavourite: createBoolean(),
    });
  }
  return filmsArray;
};

export {createfilmsMockArray};
