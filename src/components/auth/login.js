import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Login extends Component {
  handleFormSubmit({ email, password }) {
    alert('hi');
    this.props.loginUser({ email: email, password: password });
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;
    
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input {...password} className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Log In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'Login',
  fields: ['email', 'password']
}, null, actions)(Login);