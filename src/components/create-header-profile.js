import {createElement} from '../util.js';

const profileData = {
  profileRating: `Movie Buff`,
  profileAvatar: `images/bitmap@2x.png`,
};

export default class HeaderProfile {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return (`
    <section class="header__profile profile">
      <p class="profile__rating">${profileData.profileRating}</p>
      <img class="profile__avatar" src="${profileData.profileAvatar}" alt="Avatar" width="35" height="35">
    </section>
  `);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate().trim());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
