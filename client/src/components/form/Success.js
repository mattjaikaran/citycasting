import React, { Fragment } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <MuiThemeProvider>
      <Fragment>
        <h1>Successfully Submitted</h1>
        <Link to="/" className="text-underline">
          <p>Return home to view all Invoices.</p>
        </Link> 
      </Fragment>
    </MuiThemeProvider>
  )
}


export default Success
