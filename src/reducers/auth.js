import { USER_AUTH } from '../constants/actionTypes';
const initalState = {
  user: null,
};

export const userState = (state = initalState, action) => {
  switch (action.type) {
    case USER_AUTH:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
