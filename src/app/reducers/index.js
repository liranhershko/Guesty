import { combineReducers } from 'redux';
import cities from './cities';
import listings from './listings';
import reviews from './reviews';

const rootReducer = combineReducers({
  cities,
  listings,
  reviews
});

export default rootReducer;
