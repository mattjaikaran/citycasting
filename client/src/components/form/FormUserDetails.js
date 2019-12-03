import React, { Component, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Grid from '@material-ui/core/Grid'
import Autocomplete from './Autocomplete'

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values, handleChange } = this.props
    console.log(this.props)
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Autocomplete
              onChange={(val) => handleChange('code')(val)}
              defaultValue={values.code}
              />
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
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = {
  button: {
    margin: 15,
  }
}


export default FormUserDetails
