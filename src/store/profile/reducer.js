import { TOGGLE_SHOW_CHECK } from "./actions";

const initialState = {
  showCheck: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_CHECK: {
      return {
        ...state,
        showCheck: !state.showCheck,
      };
    }
    default:
      return state;
  }
};