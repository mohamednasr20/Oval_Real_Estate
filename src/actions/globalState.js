import { FETCH_PROPERTIES, SEARCH_PARAMS } from '../constants/actionTypes';
import * as api from '../api';

export const getProperties = (params) => async (dispatch) => {
  try {
    const res = await api.getProperties(params);
    dispatch({ type: FETCH_PROPERTIES, payload: res });
  } catch (error) {
    console.log(error.message);
  }
};

export const onChangeSearchLocation = (param) => (dispatch) => {
  dispatch({
    type: SEARCH_PARAMS,
    payload: param,
  });
};
