import { USER_AUTH, USER_DOCUMENT } from '../constants/actionTypes';

export const handleUserState = (user) => (dispatch) => {
  dispatch({ type: USER_AUTH, payload: user });
};

export const handleUserDocument = (newDocument) => (dispatch) => {
  dispatch({ type: USER_DOCUMENT, payload: newDocument });
};
