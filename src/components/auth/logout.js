import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Logout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>Sorry to see you go...</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    signoutUser: state.authentication
  }
}
export default connect(mapStateToProps, actions)(Logout);