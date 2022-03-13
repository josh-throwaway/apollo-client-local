import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Typography} from "@material-ui/core";
import { useMutation, gql } from "@apollo/client";

const ADD_LINK = gql`
    mutation($url: String!, $slug: String) {
    createLink(url: $url, slug: $slug) {
      url, id, slug
    }
  }
`; 

const useStyles = makeStyles((theme) => ({

  bg: {
    backgroundColor: "#26384a",
    minHeight: "12vh"
  },

  input: {
    backgroundColor: "white"
    
  },

  secondInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  firstInput: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },

  lastInput: {
    display: "flex",
    alignItems: "center"
  }
  

}));

export default function InputForm() {

  const classes = useStyles();
  const [url, setUrl] = useState('')
  const [slug, setSlug] = useState('')
  
  const LINKS_QUERY = (gql`
    {
      allLinks {
        slug,
        url,
        id
      }
    }
  `);

  const [addLink, { data, loading, error }] = useMutation(ADD_LINK, {variables: {url, slug}, refetchQueries: [{query: LINKS_QUERY}]});

  if (error) return `Submission error! ${error.message}`;


  return (
    <Grid container className={classes.bg}>
      <Grid item xs={12} md={6} lg={4} className={classes.firstInput}>
      {loading ? <Typography>Submitting...</Typography> : ''}
        <TextField 
          label="URL" 
          value={url}
          onChange={(e) => {setUrl(e.target.value)}}
          variant="filled" 
          fullWidth 
          className={classes.input}

        />
      </Grid>
      <Grid item xs={12} md={6} lg={4} className={classes.secondInput}>
      <TextField 
          label="Add a custom slug (optional)" 
          value={slug}
          onChange={(e) => {setSlug(e.target.value)}}
          variant="filled" 
          fullWidth 
          className={classes.input}
        />
      </Grid>
      <Grid item xs={12} lg={4} className={classes.lastInput}>
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
