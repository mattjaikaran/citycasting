import React from 'react'
import Grid from '@material-ui/core/Grid'

const CustomerHistory = (props) => {
  return (
    <div>
      <h3>Customer History</h3>
      {props.data !== '' ? (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <p>
              <strong>{props.data}</strong>
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            History
          </Grid>
        </Grid>
      ) : null }
    </div>
  )
}

export default CustomerHistory
