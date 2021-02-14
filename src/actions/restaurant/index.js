import { KEY_RESTAURANTS, KEY_RESTAURANTS_FILTER } from "reducers/keys";
import { GetRestaurants } from "actions/http";
import { progress } from "actions/general";

export const getRestaurants = (dispatch) => () => {
  progress(dispatch)(true);
  GetRestaurants()
    .then((restaurants) => {
      dispatch({ type: KEY_RESTAURANTS, payload: restaurants });
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      progress(dispatch)(false);
    });
};

export const filter = (dispatch) => (filter) => {
  progress(dispatch)(true);
  dispatch({ type: KEY_RESTAURANTS_FILTER, payload: filter });
  progress(dispatch)(false);
};
