import { FETCH_PROPERTIES, SEARCH_PARAMS } from '../constants/actionTypes';

const initalState = {
  properties: [],
  searchParams: {
    state_code: 'FL',
    city: 'Orlando',
    offset: '0',
    limit: '20',
    sort: 'relevance',
  },
};

export default (state = initalState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return { ...state, properties: action.payload };
    case SEARCH_PARAMS:
      return {
        ...state,
        searchParams: action.payload,
      };
    default:
      return state;
  }
};
