import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  photo: {
    display: 'flex',
    justifyContent: 'center'

  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  infoText: {
    paddingBottom: "10px"
  }
}));

export default function InfoPanel() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={6} className={classes.centered}>
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
              // disabled={status}
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
            // disabled={status}
            // onClick={handleClick}
            fullWidth
          >
            Request a demo
          </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} className={classes.photo}>
        <img src={"https://hdwy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56993b52-55ed-45c4-8db7-d1c6a3f62cbc%2Fperson.png?table=block&id=6c79c066-cbf7-4d1f-9cb5-fa31a2152d08&spaceId=425f0f1f-eb89-41cf-b925-85e46de334af&width=730&userId=&cache=v2"} alt="Selfie" />
      </Grid>
    </Grid>
  );
}