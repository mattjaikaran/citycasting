import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import axios from 'axios'

class Confirm extends Component {
  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const {
      values: { code, firstName, lastName, email, occupation, city, bio }
    } = this.props
    // const url = ''
    const obj = {
      code, firstName, lastName, email, occupation, city, bio
    }
    console.log(obj)
    // try {
    //   const response = await axios.post(url, obj)
    //   console.log('success')
    // } catch (err) {
    //   console.log(err.message)
    // }
    this.props.nextStep()
  }

  render() {
    const {
      values: { code, firstName, lastName, email, occupation, city, bio }
    } = this.props
    return (
      <MuiThemeProvider>
        <Fragment>
          <h2>Confirm Details</h2>
          <List>
            <ListItem>
              <ListItemText
                primary="Code"
                secondary={code}
                />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Name"
                secondary={firstName}
                />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Last Name"
                secondary={lastName}
                />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Email"
                secondary={email}
                />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Occupation"
                secondary={occupation}
                />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="City"
                secondary={city}
                />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Bio"
                secondary={bio}
                />
            </ListItem>
          </List>
          <br />
            <Button
              color="secondary"
              variant="contained"
              style={styles.button}
              aria-label="Back"
              onClick={this.back}
              >
              <ArrowBackIcon /> Back
            </Button>
            <Button
              className="green"
              variant="contained"
              style={styles.button}
              aria-label="Submit"
              onClick={this.handleSubmit}
              >
              Submit <ArrowForwardIcon />
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


export default Confirm
