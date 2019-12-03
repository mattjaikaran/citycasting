import React, { Fragment } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import {
  addLine, lineTotal, laborTotal, metalTotal, invoiceTotal
} from './invoiceFunctions'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    float: 'right',
    marginTop: '15vh'
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const handleAddLine = (values) => {
  console.log(values)
  addLine(values)
  //clear line values
}

const handleLineTotal = (values) => {
  console.log(values)
}

const InvoiceDetails = (props) => {
  console.log(props)
  const { values, handleChange, nextStep, prevStep } = props
  const classes = useStyles()
  return (
    <MuiThemeProvider>
      <Fragment>
        <TextField
          placeholder="Customer Code"
          label="Customer Code"
          defaultValue={values.custCode}
          margin="normal"
          disabled
          />
          <TextField
            placeholder="1001"
            label="Invoice #"
            onChange={handleChange('invoiceNumber')}
            defaultValue={values.invoiceNumber}
            margin="normal"
            />
        <TextField
          placeholder="Created By"
          label="Created By"
          onChange={handleChange('createdBy')}
          defaultValue={values.createdBy}
          margin="normal"
          />
        <br />
        <TextField
          label="Weight"
          onChange={handleChange('lineWeight')}
          defaultValue={values.lineWeight}
          margin="normal"
          />
        <TextField
          placeholder="Pieces"
          label="Pieces"
          onChange={handleChange('linePieces')}
          defaultValue={values.linePieces}
          margin="normal"
          />
        <TextField
          placeholder="Metal"
          label="Metal"
          onChange={handleChange('lineMetal')}
          defaultValue={values.lineMetal}
          margin="normal"
          />
        <TextField
          placeholder="Style #"
          label="Style #"
          onChange={handleChange('styleNumber')}
          defaultValue={values.styleNumber}
          margin="normal"
          />
        <TextField
          placeholder="Description"
          label="Description"
          onChange={handleChange('lineDescription')}
          defaultValue={values.lineDescription}
          margin="normal"
          />
        <TextField
          placeholder="Labor"
          label="Labor"
          onChange={handleChange('lineLabor')}
          defaultValue={values.lineLabor}
          margin="normal"
          />
        <TextField
          placeholder="Labor PC"
          label="Labor PC"
          onChange={handleChange('lineLaborPC')}
          defaultValue={values.lineLaborPC}
          margin="normal"
          />
        <TextField
          placeholder="Price DWT"
          label="Price DWT"
          onChange={handleChange('linePriceDWT')}
          defaultValue={values.linePriceDWT}
          margin="normal"
          />
        <TextField
          placeholder="Line Total"
          label="Line Total"
          onChange={lineTotal(values)}
          defaultValue={values.lineTotal}
          margin="normal"
          />
        <div>
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            className={classes.margin}
            onClick={() => handleAddLine(values)}
          >
          <AddIcon />
        </Fab>
        <br />
          <Button
            color="secondary"
            className="formButton"
            variant="contained"
            style={styles.button}
            aria-label="Back"
            onClick={prevStep}
            >
            <ArrowBackIcon /> Back
          </Button>
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
        </div>
      </Fragment>
    </MuiThemeProvider>
  )
}

const styles = {
  button: {
    margin: 15,
  }
}


export default InvoiceDetails
