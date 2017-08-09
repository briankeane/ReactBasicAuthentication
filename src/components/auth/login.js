import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Login extends Component {
  handleFormSubmit({ email, password }) {
    this.props.loginUser({ email: email, password: password });
  }

  renderAlert() {
    if (this.props.errMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errMessage}
        </div>
        );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" component="input" type="email" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <Field name="password" component="input" type="password" />
        </fieldset>
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
    );
  }
}

const form = reduxForm({ form: 'login' })(Login);

function mapStateToProps(state) {
  return { errMessage: state.auth.errMessage };
}


export default connect(mapStateToProps, actions)(form);