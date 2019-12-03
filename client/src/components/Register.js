import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
  button: {
    margin: 15
  }
}

class Register extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: ''
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  render() {
    const { email, password, passwordConfirm } = this.state
    return (
      <MuiThemeProvider>
        <Fragment>
          <TextField
            hintText="Email"
            label="Email"
            onChange={this.onChange}
            defaultValue={email}
            margin="normal"
            />
          <br />
          <TextField
            hintText="Password"
            label="Password"
            onChange={this.onChange}
            defaultValue={password}
            margin="normal"
            />
          <br />
          <TextField
            hintText="Confirm Password"
            label="Confirm Password"
            onChange={this.onChange}
            defaultValue={passwordConfirm}
            margin="normal"
            />
          <br />
          <Button
            color="primary"
            className="formButton"
            variant="contained"
            style={styles.button}
            aria-label="Continue">
            Register
          </Button>
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Register
