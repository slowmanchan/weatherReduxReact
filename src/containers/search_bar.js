import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchweather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value })
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchweather(this.state.term)
    this.setState({ term: '' })
    // need to go fetch weather data
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Get a 5 day forecast in your favorite cities'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // no need to call dispatch(fetchweater) .. fetchweather is now bound to dispatch
  // so jsut call fetchweater, will dispatch the action
  return bindActionCreators({ fetchweather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
