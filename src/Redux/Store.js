import formReducer from "./form-reducer";

import portfolio1 from "../img/portfolio-1.jpg";
import portfolio2 from "../img/portfolio-2.jpg";
import portfolio3 from "../img/portfolio-3.jpg";
import portfolio4 from "../img/portfolio-4.jpg";
import portfolio5 from "../img/portfolio-5.jpg";
import portfolio6 from "../img/portfolio-6.jpg";
import portfolio7 from "../img/portfolio-7.jpg";
import portfolio8 from "../img/portfolio-8.jpg";

import card1 from "../img/diamond.png";
import card2 from "../img/arc.png";
import card3 from "../img/phone.png";
import card4 from "../img/joy.png";
import card5 from "../img/plane.png";
import card6 from "../img/star.png";
import card7 from "../img/magic-wand.png";
import card8 from "../img/paint-bucket.png";

import client1 from "../img/brand1.png";
import client2 from "../img/brand2.png";
import client3 from "../img/brand3.png";
import client4 from "../img/brand4.png";
import client5 from "../img/brand1.png";

let UPDATE_NEW_YOUR_NAME = "UPDATE_NEW_YOUR_NAME";
let SEND_FORM = "SEND_FORM";
let UPDATE_NEW_EMAIL = "UPDATE_NEW_EMAIL";
let UPDATE_NEW_TITLE = "UPDATE_NEW_TITLE";
let UPDATE_NEW_COMMENT = "UPDATE_NEW_COMMENT";

let store = {
  _state: {
    images: [
      portfolio1,
      portfolio2,
      portfolio3,
      portfolio4,
      portfolio5,
      portfolio6,
      portfolio7,
      portfolio8,
    ],

    services: [
      {
        icons: card1,
        text: "ui / ux design",
        subtext: "Be set fourth land god darkness make it wherein own",
      },
      {
        icons: card2,
        text: "web development",
        subtext: "A she'd them bring void moving third she'd kind fill",
      },
      {
        icons: card3,
        text: "app / mobile",
        subtext: "Dominion man second spirit he earth they're creeping",
      },
      {
        icons: card4,
        text: "game design",
        subtext: "Morning his saying moveth it multiply appear life be",
      },
      {
        icons: card5,
        text: "SEO / marketing",
        subtext: "Give won't after land fill creeping meat you, may",
      },
      {
        icons: card6,
        text: "photography",
        subtext: "Creepeth one seas cattle grass give moving saw give",
      },
      {
        icons: card7,
        text: "graphic design",
        subtext: "Open, great whales air rule for, fourth life whales",
      },
      {
        icons: card8,
        text: "illustrations",
        subtext: "Whales likeness hath, man kind for them air two won't",
      },
    ],

    clients: [client1, client2, client3, client4, client5],

    form: {
      name: "",
      email: "",
      title: "",
      comment: "",
      newYourName: "",
      newEmail: "",
      newTitle: "",
      newComment: "",
    },
  },
  getState() {
    return this._state;
  },
  renderEntire() {
    console.log("render");
  },
  dispatch(action) {
    this._state.form = formReducer(this._state.form, action);
    this.renderEntire(store);
  },
  subscribe(observer) {
    this.renderEntire = observer;
  },
};
export const updateCommentCreator = (comment) => ({
  type: UPDATE_NEW_COMMENT,
  newComment: comment,
});
export const updateTitleCreator = (title) => ({
  type: UPDATE_NEW_TITLE,
  newTitle: title,
});
export const updateNewEmailCreator = (email) => ({
  type: UPDATE_NEW_EMAIL,
  newEmail: email,
});
export const sendFormCreator = () => ({ type: SEND_FORM });
export const updateYorNameCreator = (name) => ({
  type: UPDATE_NEW_YOUR_NAME,
  newName: name,
});

export default store;
