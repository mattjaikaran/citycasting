import React, { Component } from 'react'
import CustomerLookup from './CustomerLookup'
import InvoiceDetails from './InvoiceDetails'
import Confirm from './Confirm'
import Success from './Success'
import Home from '../Home'

class Invoice extends Component {
  state = {
    step: 1,
    invoiceNumber: null,
    createdAt: new Date().toLocaleString(),
    createdBy: '',
    custCode: '',
    goldPrice: null,
    goldBalance: null,
    goldUsed: null,
    newGoldBalance: null,
    silverPrice: null,
    silverBalance: null,
    platinumPrice: null,
    platinumBalance: null,
    lineItems: [],
    lineWeight: null,
    linePieces: null,
    lineMetal: null,
    lineStyleNumber: '',
    lineDescription: null,
    lineLabor: null,
    lineLaborPC: null,
    linePriceDWT: null,
    lineTotal: 0,
    metalTotal: 0,
    laborTotal: 0,
    shippingTotal: 0,
    invoiceTotal: 0
  }

  // proceed to next step
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  // Previous step
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  //handle fields onChange
  handleChange = (input) => (e) => {
    e.target ? this.setState({ [input]: e.target.value })
    : this.setState({ [input]: e })
  }

  render() {
    const { step } = this.state
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
    } = this.state
    const values = {
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
    switch (step) {
      case 1:
        return (
          <CustomerLookup
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            />
        )
      case 2:
        return (
          <InvoiceDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            />
        )
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            />
        )
      case 4:
        return <Success />
      default:
        return <Home />
    }
  }
}

export default Invoice
