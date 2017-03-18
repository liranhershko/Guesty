import React from 'react';
import SelectCity from './SelectCity';
import Listings from './Listings';
import Listing from './Listing';

export default () => {
  return (
    <div className="container">
      <SelectCity />
      <Listings />
      <Listing />
    </div>
  );
};
