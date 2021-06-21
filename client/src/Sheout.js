import React from 'react';
import {AmplifySignOut } from '@aws-amplify/ui-react';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BrowseDisplay from './components/Browse/BrowseDisplay';
import PurchasesDisplay from './components/Purchases/PurchasesDisplay';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  logo: {
    height: '3.5vmin',
  },
  login: {
    marginLeft: 'auto',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

const Sheout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.links}>
              <Typography edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <img src={logo} className={classes.logo} alt='logo' />
              </Typography>
              <Button>
                <Link className={classes.link} to='/browse'>Browse</Link>
              </Button>
              <Button>
                <Link className={classes.link} to='/purchases'>Purchases</Link>
              </Button>
            </div>
            <AmplifySignOut className={classes.login}/>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <BrowseDisplay />
          </Route>
          <Route path="/browse">
            <BrowseDisplay />
          </Route>
          <Route path="/purchases">
            <PurchasesDisplay />
          </Route>
        </Switch>
      </Router>
    </div>
  )
};

export default Sheout;
