import { Grid, Typography, Button } from "@material-ui/core";


export default function InfoPanel() {




  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography variant="h3">
          Your Brand on Your Links
        </Typography>
        <Typography>
          Rebrandly is the idustry-leading link management platform to brand, track, and share short URLs using a custom domain name
        </Typography>
        <Button
          variant="contained"
          color="primary"
          // disabled={status}
          // onClick={handleClick}
          fullWidth
        >
          Sign up free
        </Button>
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
      <Grid item xs={12} md={6}>
        <img src={"https://hdwy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56993b52-55ed-45c4-8db7-d1c6a3f62cbc%2Fperson.png?table=block&id=6c79c066-cbf7-4d1f-9cb5-fa31a2152d08&spaceId=425f0f1f-eb89-41cf-b925-85e46de334af&width=730&userId=&cache=v2"} alt="Selfie" />
      </Grid>
    </Grid>
  );
}