import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }
  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props
    return (
      <MuiThemeProvider>
        <Fragment>
          <TextField
            hintText="Enter Your First Name"
            label="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            margin="normal"
            />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            margin="normal"
            />
          <br />
          <TextField
            hintText="Enter Your Email"
            label="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            margin="normal"
            />
          <br />
          <TextField
            hintText="Enter Your Occupation"
            label="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
            margin="normal"
            />
          <br />
          <TextField
            hintText="Enter Your City"
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
            margin="normal"
            />
          <br />
          <TextField
            hintText="Enter Your Bio"
            label="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
            margin="normal"
            />
          <br />
            <Button
              color="secondary"
              className="formButton"
              variant="contained"
              style={styles.button}
              aria-label="Back"
              onClick={this.back}
              >
              <ArrowBackIcon /> Back
            </Button>
            <Button
              color="primary"
              className="formButton"
              variant="contained"
              style={styles.button}
              aria-label="Continue"
              onClick={this.continue}
              >
              Continue <ArrowForwardIcon />
            </Button>
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15,
  }
}


export default FormPersonalDetails
