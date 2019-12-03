import React, { Component, Fragment } from 'react'
import Login from './Login'
import Register from './Register'
import Grid from '@material-ui/core/Grid'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Grid container>
          <Grid xs={12} sm={6}>
            <h3>Login</h3>
            <Login />
          </Grid>
          <Grid xs={12} sm={6}>
            <h3>Register</h3>
            <Register />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Home
