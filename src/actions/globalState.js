import {
  FETCH_PROPERTIES,
  FETCH_PROPERTY,
  IS_LOADING,
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

export const getProperty = (property_id) => async (dispatch) => {
  try {
    const res = !property_id ? {} : await api.getProperty(property_id);
    dispatch({ type: FETCH_PROPERTY, payload: res });
  } catch (error) {
    console.log(error);
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

export const handleLoading = (boolean) => (dispatch) => {
  dispatch({ type: IS_LOADING, payload: boolean });
};
