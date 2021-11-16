import { USER_AUTH } from '../constants/actionTypes';

export const handleUserState = (user) => (dispatch) => {
  dispatch({ type: USER_AUTH, payload: user });
};
