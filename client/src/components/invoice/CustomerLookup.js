import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Grid from '@material-ui/core/Grid'
import Autocomplete from './Autocomplete'
import CustomerHistory from './CustomerHistory'

const nextStep = (e) => {
  e.preventDefault()
  this.props.nextStep()
}

const styles = {
  button: {
    margin: 15,
  }
}

const CustomerLookup = (props) => {
  const { values, handleChange, nextStep } = props
  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Autocomplete
            onChange={(val) => handleChange('custCode')(val)}
            defaultValue={values.custCode}
            />
          <Button
            color="primary"
            className="formButton"
            variant="contained"
            style={styles.button}
            aria-label="Continue"
            onClick={nextStep}
            >
            Continue <ArrowForwardIcon />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <CustomerHistory data={values.custCode} />
        </Grid>
      </Grid>
    </div>
  )
}


export default CustomerLookup
