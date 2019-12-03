import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
  button: {
    margin: 15
  }
}

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  render() {
    const { email, password } = this.state
    return (
      <MuiThemeProvider>
        <Fragment>
          <TextField
            hintText="Email"
            label="Email"
            name="email"
            onChange={this.onChange}
            defaultValue={email}
            margin="normal"
            />
          <br />
          <TextField
            hintText="Password"
            label="Password"
            name="password"
            onChange={this.onChange}
            defaultValue={password}
            margin="normal"
            />
          <br />
          <Button
            color="primary"
            className="formButton"
            variant="contained"
            style={styles.button}
            aria-label="Continue">
            Login
          </Button>
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Login
