import { FETCH_LISTINGS, OPEN_LISTING, CLOSE_LISTING } from '../actions/types';

const initialState = { all: [], selectedListing: null };

export default function cities(state = initialState, action) {
  switch (action.type) {
    case FETCH_LISTINGS:
      return { ...state, all: action.payload };
    case OPEN_LISTING:
      return { ...state, selectedListing: action.payload };
    case CLOSE_LISTING:
      return { ...state, selectedListing: null };
  }

  return state;
}
