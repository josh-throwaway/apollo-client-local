import { Grid, Typography, Button, withStyles } from "@material-ui/core";
import styles from './styles';

function Summary(props) {
  const {classes} = props;

  return (
    <Grid container >
      <Grid item xs={12} >
        <Typography variant="h3" className={classes.infoText}>
          Your Brand on Your Links
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.infoText}>
          Rebrandly is the idustry-leading link management platform to brand, track, and share short URLs using a custom domain name
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button
          variant="contained"
          color="primary"
          // onClick={handleClick}
          fullWidth
        >
          Sign up free
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
      <Button
        variant="contained"
        color="secondary"
        // onClick={handleClick}
        fullWidth
      >
        Request a demo
      </Button>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Summary);