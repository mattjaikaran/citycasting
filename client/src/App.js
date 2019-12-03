import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import Header from './components/Header'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import New from './components/New'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

function App() {
  const classes = useStyles()
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route exact path="/new" component={New} />
            </Grid>
          </Grid>
        </Switch>
      </div>
    </Router>
  )
}

export default App
