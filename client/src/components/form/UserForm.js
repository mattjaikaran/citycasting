import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'
import Home from '../Home'

class UserForm extends Component {
  state = {
    step: 1,
    code: '',
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }

  // proceed to next step
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  // Previous step
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  //handle fields onChange
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { step } = this.state
    const { code, firstName, lastName, email, occupation, city, bio } = this.state
    const values = {
      code, firstName, lastName, email, occupation, city, bio
    }
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            />
        )
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            />
        )
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            />
        )
      case 4:
        return <Success />
      default:
        return <Home />
    }
  }
}

export default UserForm
