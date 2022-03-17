import card1 from "../img/diamond.png";
import card2 from "../img/arc.png";
import card3 from "../img/phone.png";
import card4 from "../img/joy.png";
import card5 from "../img/plane.png";
import card6 from "../img/star.png";
import card7 from "../img/magic-wand.png";
import card8 from "../img/paint-bucket.png";

let initialState = [
  {
    url: card1,
    text: "ui / ux design",
    subtext: "Be set fourth land god darkness make it wherein own",
    id: 1,
  },
  {
    url: card2,
    text: "web development",
    subtext: "A she'd them bring void moving third she'd kind fill",
    id: 2,
  },
  {
    url: card3,
    text: "app / mobile",
    subtext: "Dominion man second spirit he earth they're creeping",
    id: 3,
  },
  {
    url: card4,
    text: "game design",
    subtext: "Morning his saying moveth it multiply appear life be",
    id: 4,
  },
  {
    url: card5,
    text: "SEO / marketing",
    subtext: "Give won't after land fill creeping meat you, may",
    id: 5,
  },
  {
    url: card6,
    text: "photography",
    subtext: "Creepeth one seas cattle grass give moving saw give",
    id: 6,
  },
  {
    url: card7,
    text: "graphic design",
    subtext: "Open, great whales air rule for, fourth life whales",
    id: 7,
  },
  {
    url: card8,
    text: "illustrations",
    subtext: "Whales likeness hath, man kind for them air two won't",
    id: 8,
  },
];

const servicesReducer = (state = initialState, action) => {
  return [...state];
};

export default servicesReducer;
