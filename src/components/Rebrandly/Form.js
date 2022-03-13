import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles({});

export default function InputForm() {

  const classes = useStyles();
  const [url, setUrl] = useState('')
  const [slug, setSlug] = useState('')


  // useEffect(() => {
  // }, []);



  const handleSubmit = () => {

  }

  return (
    
    <Grid container>
      <Grid item xs={6} md={6}>
        <TextField 
          label="URL" 
          value={url}
          onChange={(e) => {setUrl(e.target.value)}}
          variant="outlined" 
          fullWidth 
        />
      </Grid>
      <Grid item xs={6} md={6}>
      <TextField 
          label="Add a custom slug (optional)" 
          value={slug}
          onChange={(e) => {setSlug(e.target.value)}}
          variant="outlined" 
          fullWidth 
        />
      </Grid>

    </Grid>
  );
}
