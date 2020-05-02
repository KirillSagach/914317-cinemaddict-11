import {createElement} from '../util.js';

export default class HeaderProfile {
  constructor() {
    this._element = null;
    this._profileData = {
      profileRating: `Movie Buff`,
      profileAvatar: `images/bitmap@2x.png`,
    };
  }

  getTemplate() {
    return (`
    <section class="header__profile profile">
      <p class="profile__rating">${this._profileData.profileRating}</p>
      <img class="profile__avatar" src="${this._profileData.profileAvatar}" alt="Avatar" width="35" height="35">
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
