import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Typography} from "@material-ui/core";
import { useMutation, gql, useQuery } from "@apollo/client";

const ADD_LINK = gql`
    mutation($url: String!, $slug: String) {
    createLink(url: $url, slug: $slug) {
      url, id, slug
    }
  }
`; 

const QUERY_BY_SLUG = gql`
    query($slug: String!) {
      linkBySlug(slug: $slug) {
        url, slug
    }
  }
`;

const LINKS_QUERY = gql`
  {
    allLinks {
      slug,
      url,
      id
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
  const [url, setUrl] = useState('');
  const [slug, setSlug] = useState('');
  const [slugError, setSlugError] = useState(false);
  const [slugErrorText, setSlugErrorText] = useState("");
  const [urlError, setUrlError] = useState(false);
  const [urlErrorText, setUrlErrorText] = useState("");
  
  let invalidSlug = useQuery(QUERY_BY_SLUG, {variables: {slug}}).data;

  const [addLink, { data, loading, error }] = useMutation(ADD_LINK, {variables: {url, slug}, refetchQueries: [{query: LINKS_QUERY}]});

  if (error) return `Submission error! ${error.message}`;


  if (data) {
    setUrl("");
    setSlug("");
    return
    // blankInputs();
  }

  const handleSubmit = () => {
    if (invalidSlug) {
      setSlugErrorText("Slug already taken, please choose another")
      return setSlugError(true)
    }
    setSlugErrorText("");
    setSlugError(false);

    if (!url.length) {
      setUrlErrorText("Please enter a url")
      return setUrlError(true)
    }
    setUrlErrorText("");
    setUrlError(false);
    
    return addLink();
  }

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
          error={urlError}
          helperText={urlErrorText}
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
          error={slugError}
          helperText={slugErrorText}
        />
      </Grid>
      <Grid item xs={12} lg={4} className={classes.lastInput}>
      <Button
          variant="contained"
          color="primary"
          // disabled={status}
          onClick={handleSubmit}
          fullWidth
        >
          Shorten URL
        </Button>
      </Grid>

    </Grid>
  );
}
