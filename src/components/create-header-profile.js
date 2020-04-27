const profileData = {
  profileRating: `Movie Buff`,
  profileAvatar: `images/bitmap@2x.png`,
};

const createHeaderProfile = () => {
  return (`
    <section class="header__profile profile">
    <p class="profile__rating">${profileData.profileRating}</p>
    <img class="profile__avatar" src="${profileData.profileAvatar}" alt="Avatar" width="35" height="35">
  </section>
`);
};

export {createHeaderProfile};
