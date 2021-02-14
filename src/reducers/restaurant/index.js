/* eslint-disable import/no-anonymous-default-export */
import {
  KEY_RESTAURANT,
  KEY_RESTAURANTS,
  KEY_RESTAURANTS_FILTER,
} from "../keys";

const initState = {
  restaurant: {},
  restaurants: {
    data: [],
  },
  filter: "alphabet",
};

export default (state = initState, action) => {
  switch (action.type) {
    case KEY_RESTAURANT:
      return { ...state, restaurant: action.payload };
    case KEY_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    case KEY_RESTAURANTS_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
