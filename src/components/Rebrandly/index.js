import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Results from './Results';
import InputForm from './Form';
import InfoPanel from "./InfoPanel";

const useStyles = makeStyles({});

export default function Rebrandly() {

  const classes = useStyles();


  // useEffect(() => {
  // }, []);


  const handleSubmit = () => {

  }

  return (
    
    <Grid container>
      <InfoPanel />
      <InputForm />
      <Results />

    </Grid>
  );
}
