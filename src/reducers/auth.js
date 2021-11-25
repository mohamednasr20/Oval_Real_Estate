import { USER_AUTH, USER_DOCUMENT } from '../constants/actionTypes';
const initalState = {
  user: null,
  userDocument: null,
};

export const userState = (state = initalState, action) => {
  switch (action.type) {
    case USER_AUTH:
      return { ...state, user: action.payload };
    case USER_DOCUMENT:
      return { ...state, userDocument: action.payload };
    default:
      return state;
  }
};
