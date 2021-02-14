import { KEY_PROGRESS } from "reducers/keys";

export const progress = (dispatch) => (visible) => {
  if (dispatch) {
    dispatch({ type: KEY_PROGRESS, payload: visible });
  }
};
