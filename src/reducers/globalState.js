import {
  FETCH_PROPERTIES,
  SEARCH_PARAMS,
  SEARCH_TYPE,
  IS_LOADING,
  FETCH_PROPERTY,
  SHOW_AUTH,
} from '../constants/actionTypes';

const initalState = {
  properties: [],
  searchParams: {
    state_code: 'FL',
    city: 'Tampa',
    offset: '0',
    limit: '50',
    sort: 'relevance',
    beds_min: '',
    price_min: '',
    price_max: '',
    prop_type: '',
  },
  searchType: 'list-for-sale',
  isLoading: true,
  selectedProperty: {},
  showAuth: false,
};

export const globalState = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return { ...state, properties: action.payload };
    case SEARCH_PARAMS:
      return {
        ...state,
        searchParams: action.payload,
      };
    case SEARCH_TYPE:
      return { ...state, searchType: action.payload };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case FETCH_PROPERTY:
      return { ...state, selectedProperty: action.payload };
    case SHOW_AUTH:
      return { ...state, showAuth: action.payload };
    default:
      return state;
  }
};
