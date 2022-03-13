import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from "@material-ui/core";
import { useMutation, gql } from "@apollo/client";

const ADD_LINK = gql`
    mutation($url: String!, $slug: String) {
    createLink(url: $url, slug: $slug) {
      url, id, slug
    }
  }
`; 

const useStyles = makeStyles({});

export default function InputForm() {

  const classes = useStyles();
  const [url, setUrl] = useState('')
  const [slug, setSlug] = useState('')

  const [addLink, { data, loading, error }] = useMutation(ADD_LINK, {variables: {url, slug}});

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;


  return (
    
    <Grid container>
      <Grid item xs={12} md={6} lg={4}>
        <TextField 
          label="URL" 
          value={url}
          onChange={(e) => {setUrl(e.target.value)}}
          variant="outlined" 
          fullWidth 
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <TextField 
          label="Add a custom slug (optional)" 
          value={slug}
          onChange={(e) => {setSlug(e.target.value)}}
          variant="outlined" 
          fullWidth 
        />
      </Grid>
      <Grid item xs={12} lg={4}>
      <Button
          variant="contained"
          color="primary"
          // disabled={status}
          onClick={addLink}
          fullWidth
        >
          Shorten URL
        </Button>
      </Grid>

    </Grid>
  );
}
