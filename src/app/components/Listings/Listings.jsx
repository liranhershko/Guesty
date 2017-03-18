import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './listings.scss';

class Listings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClickedListing({ picture_url, name, public_address, id }) {
    this.props.openListing({ picture_url, name, public_address, id });
  }

  render() {
    return (
      <div className="container listings">
        {this.renderListings()}
      </div>
    );
  }

  renderListings() {
    return this.props.listings.map(item => {
      return (
        <div className="listing" key={item.id} onClick={this.handleClickedListing.bind(this, item)}>
          <img src={item.picture_url} />
          <div className="details">
            <strong>{item.name}</strong>
            <div>{item.public_address}</div>
          </div>
        </div>
      );
    });
  }
}

function mapStateToProps({ listings }) {
  return { listings: listings.all };
}

export default connect(mapStateToProps, actions)(Listings);
