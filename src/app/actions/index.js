import axios from 'axios';
import { FETCH_LISTINGS, FETCH_REVIEWS, OPEN_LISTING, CLOSE_LISTING } from './types';

const ROOT_URL = 'https://api.airbnb.com/v2/';
const CLIENT_ID = '3092nxybyb0otqw18e8nh5nty';

export function fetchListings(location) {
  return function(dispatch) {
    const enLocation = encodeURIComponent(location);
    axios
      .get(`${ROOT_URL}search_results?client_id=${CLIENT_ID}&_limit=10&location=${enLocation}`)
      .then(response => {
        dispatch({
          type: FETCH_LISTINGS,
          payload: response.data.search_results.map(item => {
            return item.listing;
          })
        });
      });
  };
}
export function fetchReviews(id) {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}reviews?client_id=${CLIENT_ID}&_limit=3&listing_id=${id}&role=all`)
      .then(response => {
        dispatch({
          type: FETCH_REVIEWS,
          payload: response.data.reviews.map(item => {
            return { id: item.id, userImg: item.author.picture_url, comments: item.comments };
          })
        });
      });
  };
}

export function openListing(listing) {
  return {
    type: OPEN_LISTING,
    payload: listing
  };
}

export function closeListing() {
  return {
    type: CLOSE_LISTING
  };
}
