import React from "react";
import { Grid } from "@material-ui/core";
import Results from './Results';
import InputForm from './Form';
import InfoPanel from "./InfoPanel";


export default function Rebrandly() {

  return (
    
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <InfoPanel />
        <InputForm />
        <Results />
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
