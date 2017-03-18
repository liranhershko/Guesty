import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import './reviews.scss';

class Reviews extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.revId);
  }

  render() {
    return (
      <div className="container reviews">
        {this.renderReviews()}
      </div>
    );
  }

  renderReviews() {
    return this.props.reviews.map(item => {
      return (
        <div key={item.id} className="review">
          <img src={item.userImg} />
          <div>{item.comments}</div>
        </div>
      );
    });
  }
}

function mapStateToProps({ reviews }) {
  return { reviews };
}

export default connect(mapStateToProps, actions)(Reviews);
