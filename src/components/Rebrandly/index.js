import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Results from './Results';
import InputForm from './Form';

const useStyles = makeStyles({});

export default function Rebrandly() {

  const classes = useStyles();


  // useEffect(() => {
  // }, []);


  const handleSubmit = () => {

  }

  return (
    
    <Grid container maxWidth="lg">
      <InputForm />
      <Results />

    </Grid>
  );
}
