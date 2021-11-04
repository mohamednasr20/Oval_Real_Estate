import {
  FETCH_PROPERTIES,
  SEARCH_PARAMS,
  SEARCH_TYPE,
} from '../constants/actionTypes';
import * as api from '../api';

export const getProperties = (params, searchType) => async (dispatch) => {
  try {
    const res = await api.getProperties(params, searchType);
    dispatch({ type: FETCH_PROPERTIES, payload: res });
  } catch (error) {
    console.log(error.message);
  }
};

export const handleChangeSearchType = (searchType) => (dispatch) => {
  dispatch({ type: SEARCH_TYPE, payload: searchType });
};

export const onChangeSearchParams = (params, param) => (dispatch) => {
  dispatch({
    type: SEARCH_PARAMS,
    payload: { ...params, ...param },
  });
};
