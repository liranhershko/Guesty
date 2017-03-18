import { FETCH_REVIEWS, CLOSE_LISTING } from '../actions/types';

const initialState = [];

export default function cities(state = initialState, action) {
  switch (action.type) {
    case FETCH_REVIEWS:
      return action.payload;
    case CLOSE_LISTING:
      return [];
  }

  return state;
}
