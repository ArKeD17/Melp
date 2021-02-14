import { KEY_PROGRESS } from "../keys";

const initState = {
  progress: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case KEY_PROGRESS:
      return { ...state, progress: action.payload };
    default:
      return state;
  }
};
