import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Grid } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  login: {
    display: 'flex',
    justifyContent: 'flex-end'

  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs={false} md={1}></Grid>
            <Grid item xs={4} md={2} >
              <Typography variant="h6" className={classes.title}>
                Rebrandly
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} >
              <Button color="inherit">Features</Button>
              <Button color="inherit">Pricing</Button>
            </Grid>
            <Grid item xs={false} md={3} >
            </Grid>
            <Grid item xs={2} md={3}  className={classes.login}>
              <Button color="inherit">Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
