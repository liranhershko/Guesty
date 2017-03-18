import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Reviews from '../Reviews';
import './modal.scss';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeListing();
  }

  render() {
    if (!this.props.selectedListing) return null;
    const { picture_url, name, public_address, id } = this.props.selectedListing;
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={picture_url} />
          <div>{public_address}</div>
          <Reviews revId={id} />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.closeModal}>Close</Button>
        </Modal.Footer>

      </Modal.Dialog>
    );
  }
}

function mapStateToProps({ listings }) {
  return { selectedListing: listings.selectedListing };
}

export default connect(mapStateToProps, actions)(Listing);
