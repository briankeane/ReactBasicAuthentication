import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { renderTextField } from './form_helpers'


class LoginForm extends Component {

  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Oops: </strong>{this.props.errorMessage}
      </div>
    }
  }

  render() {
    const {handleSubmit} = this.props

    return (
      <div>
        {this.renderAlert()}
        <form onSubmit={handleSubmit}>

          <Field
            label="Username"
            name="email"
            component={renderTextField}
            type="text"/>

          <Field
            label="Password"
            name="password"
            component={renderTextField}
            type="password"/>

          <button type="submit" label="Sign In" />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signin'
})(LoginForm)