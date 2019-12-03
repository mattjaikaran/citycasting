import React, { Fragment } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import axios from 'axios'

const Confirm = (props) => {
  console.log(props)
  const handleSubmit = (e) => {
    e.preventDefault()
    const {
        invoiceNumber,
        createdAt,
        createdBy,
        custCode,
        goldPrice,
        goldBalance,
        goldUsed,
        newGoldBalance,
        silverPrice,
        silverBalance,
        platinumPrice,
        platinumBalance,
        lineItems,
        lineWeight,
        linePieces,
        lineMetal,
        lineStyleNumber,
        lineDescription,
        lineLabor,
        lineLaborPC,
        linePriceDWT,
        lineTotal,
        metalTotal,
        laborTotal,
        shippingTotal,
        invoiceTotal
    } = props.values
    const obj = {
      invoiceNumber,
      createdAt,
      createdBy,
      custCode,
      goldPrice,
      goldBalance,
      goldUsed,
      newGoldBalance,
      silverPrice,
      silverBalance,
      platinumPrice,
      platinumBalance,
      lineItems,
      lineWeight,
      linePieces,
      lineMetal,
      lineStyleNumber,
      lineDescription,
      lineLabor,
      lineLaborPC,
      linePriceDWT,
      lineTotal,
      metalTotal,
      laborTotal,
      shippingTotal,
      invoiceTotal
    }
    console.log(obj)
    // const url = ''
    // try {
    //   const response = await axios.post(url, obj)
    //   console.log('success')
    // } catch (err) {
    //   console.log(err.message)
    // }
    props.nextStep()
  }

  const {
      invoiceNumber,
      createdAt,
      createdBy,
      custCode,
      goldPrice,
      goldBalance,
      goldUsed,
      newGoldBalance,
      silverPrice,
      silverBalance,
      platinumPrice,
      platinumBalance,
      lineItems,
      lineWeight,
      linePieces,
      lineMetal,
      lineStyleNumber,
      lineDescription,
      lineLabor,
      lineLaborPC,
      linePriceDWT,
      lineTotal,
      metalTotal,
      laborTotal,
      shippingTotal,
      invoiceTotal
  } = props.values
  const { prevStep } = props
  return (
    <MuiThemeProvider>
      <Fragment>
        <h2>Confirm Details</h2>
        <List>
          <ListItem>
            <ListItemText
              primary="Customer Code"
              secondary={custCode}
              />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Invoice #"
              secondary={invoiceNumber}
              />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Created At"
              secondary={createdAt}
              />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Created By"
              secondary={createdBy}
              />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Line Total"
              secondary={lineTotal}
              />
          </ListItem>
        </List>
        <br />
        <Button
          color="secondary"
          variant="contained"
          style={styles.button}
          aria-label="Back"
          onClick={prevStep}
          >
          <ArrowBackIcon /> Back
        </Button>
        <Button
          className="green"
          variant="contained"
          style={styles.button}
          aria-label="Submit"
          onClick={handleSubmit}
          >
          Submit <ArrowForwardIcon />
        </Button>
      </Fragment>
    </MuiThemeProvider>
  )
}

const styles = {
  button: {
    margin: 15,
  }
}


export default Confirm
