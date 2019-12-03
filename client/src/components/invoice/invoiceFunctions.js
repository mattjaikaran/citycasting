// fix

export const goldCalc = () => {
  const { goldBalance, goldUsed } = this.state
  this.setState({
    goldUsed: goldUsed,
    newGoldBalance: (goldBalance - goldUsed).toFixed(2)
  })
}

export const lineTotal = (values) => {
  const {
    lineWeight,
    linePriceDWT,
    lineLabor,
    linePieces,
    lineLaborPC
  } = values
  const total = ((lineWeight * (linePriceDWT + lineLabor)) + (linePieces * lineLaborPC))
  return total
}

export const addLine = (values) => {
  console.log('new line')
  console.log(values)
  let lineObj = {
      weight: values.lineWeight,
      pieces: values.linePieces,
      metal: values.lineMetal,
      styleNumber: values.lineStyleNumber,
      description: values.lineDescription,
      labor: values.lineLabor,
      laborPC: values.lineLaborPC,
      priceDWT: values.linePriceDWT,
      lineTotal: values.lineTotal
    }
    const lineItems = values.lineItems
    lineItems.push(lineObj)
    console.log(lineItems)
  //   metalTotal()
  //   laborTotal()
  //   invoiceTotal()
}


// export const metalTotal = this.state.lineItems.reduce((acc, lineItem) => {
//   if(lineItem.priceDWT === '') {
//     lineItem.priceDWT = 0
//     let mt = lineItem.weight * lineItem.priceDWT.toFixed(2)
//     const newMt = parseFloat(acc) + parseFloat(mt)
//     console.log(acc, mt)
//     // console.log(`weight: ${lineItem.weight}, dwt: ${lineItem.priceDWT}, mt: ${newMt}`)
//     return newMt.toFixed(2)
//   } else if(lineItem.weight === '') {
//     lineItem.weight = 0
//     let mt = parseFloat(acc) + parseFloat(lineItem.weight)
//     console.log(acc, mt)
//     // console.log(`weight: ${lineItem.weight}, dwt: ${lineItem.priceDWT}, mt: ${mt}`)
//     return mt.toFixed(2)
//   } else if(lineItem.priceDWT > 0) {
//     let mt = (parseFloat(lineItem.weight) * parseFloat(lineItem.priceDWT)).toFixed(2)
//     const newMt = parseFloat(acc) + parseFloat(mt)
//     // console.log(`weight: ${lineItem.weight}, dwt: ${lineItem.priceDWT}, newMt: ${newMt}`)
//     return newMt.toFixed(2)
//   } else if(lineItem.labor === '') {
//     lineItem.labor = 0
//     let mt = parseFloat(acc) + lineItem.labor
//     return mt.toFixed(2)
//   }
// }, 0)



// const laborTotal = this.state.lineItems.reduce((acc, lineItem) => {
//   if(lineItem.laborPC === '') {
//     lineItem.laborPC = 0
//     const newLbrTotal = parseFloat(acc) + lineItem.laborPC
//     return newLbrTotal.toFixed(2)
//   } else {
//     const lbrTotal = (parseFloat(lineItem.pieces) * parseFloat(lineItem.laborPC))
//     const newLbrTotal = parseFloat(acc) + parseFloat(lbrTotal)
//     return newLbrTotal.toFixed(2)
//   }
// }, 0)

// export const invoiceTotal = this.state.lineItems.reduce((acc, lineItem) => {
//       const lineTotal = lineItem.lineTotal
//       const newSum = parseFloat(acc) + parseFloat(lineTotal)
//       return newSum.toFixed(2)
//     }, 0)
