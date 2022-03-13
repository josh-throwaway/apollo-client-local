import React from "react";
import { Grid } from "@material-ui/core";
import styles from './styles';
import Summary from './Summary';

export default function InfoPanel(props) {
  const classes = styles();
  const {isMobile} = props;

  return (
  <Grid container>
    <Grid item xs={12} md={6} className={classes.centered}>
      {isMobile ? <img src={"https://hdwy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56993b52-55ed-45c4-8db7-d1c6a3f62cbc%2Fperson.png?table=block&id=6c79c066-cbf7-4d1f-9cb5-fa31a2152d08&spaceId=425f0f1f-eb89-41cf-b925-85e46de334af&width=730&userId=&cache=v2"} alt="Selfie" /> : <Summary />}
    </Grid>
    <Grid item xs={12} md={6} className={classes.photo}>
      {isMobile ? <Summary /> : <img src={"https://hdwy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56993b52-55ed-45c4-8db7-d1c6a3f62cbc%2Fperson.png?table=block&id=6c79c066-cbf7-4d1f-9cb5-fa31a2152d08&spaceId=425f0f1f-eb89-41cf-b925-85e46de334af&width=730&userId=&cache=v2"} alt="Selfie" />}
    </Grid>
  </Grid>);
}