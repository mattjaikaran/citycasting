import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import All from './All'

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

const Dashboard = () => {
  const classes = useStyles()
  return (
  <div>
    <h2>Dashboard</h2>
    <All />
    <Link to="/new">
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Link>
  </div>
  )
}

export default Dashboard
