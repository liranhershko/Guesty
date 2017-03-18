import React from 'react';
import { DropdownButton, MenuItem, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './selectCity.scss';

class SelectCity extends React.Component {
  constructor(props) {
    super(props);

    this.handleCitySelect = this.handleCitySelect.bind(this);
    this.state = {
      selectedCity: this.props.selected
    };
  }

  componentDidMount() {
    this.props.fetchListings(this.props.selected);
  }

  handleCitySelect(value) {
    if (value !== this.state.selectedCity) {
      this.setState({ selectedCity: value });
      this.props.fetchListings(value);
    }
  }

  render() {
    return (
      <div className="container selectCity">
        <FormGroup controlId="formControlsSelect">
          <div className="title">Select a city</div>
          <DropdownButton
            title={this.state.selectedCity}
            onSelect={this.handleCitySelect}
            id="dropdown-cities"
          >
            {this.renderOptions()}
          </DropdownButton>
        </FormGroup>
      </div>
    );
  }

  renderOptions() {
    return this.props.cities.map(city => {
      return <MenuItem key={city} eventKey={city}>{city}</MenuItem>;
    });
  }
}

function mapStateToProps({ cities }) {
  return { cities: cities.cities, selected: cities.selected };
}

export default connect(mapStateToProps, actions)(SelectCity);
