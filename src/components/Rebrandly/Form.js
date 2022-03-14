import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, withStyles} from "@material-ui/core";
import { useMutation, useQuery } from "@apollo/client";
import CircularProgress from '@material-ui/core/CircularProgress';
import {LINKS_QUERY, ADD_LINK, QUERY_BY_SLUG} from '../../graphqlOperations';
import styles from './styles';

function InputForm(props) {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [slug, setSlug] = useState('');
  const [slugError, setSlugError] = useState(false);
  const [slugErrorText, setSlugErrorText] = useState("");
  const [urlError, setUrlError] = useState(false);
  const [urlErrorText, setUrlErrorText] = useState("");
  const {isMobile, classes} = props;
  
  let invalidSlug = useQuery(QUERY_BY_SLUG, {variables: {slug}}).data;
  
  const [addLink, { data, error }] = useMutation(ADD_LINK, {variables: {url, slug}, refetchQueries: [{query: LINKS_QUERY}]});
  
  useEffect(() => {
    setLoading(false)
  }, [data]);

  if (error) return `Submission error! ${error.message}`;


  const handleSubmit = (props) => {
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
    setLoading(true)
    setUrlErrorText("");
    setUrlError(false);
    
    return addLink();
    
  }

  return (
    <Grid container className={classes.bg}>
      <Grid item xs={12} md={6} lg={4} className={isMobile ? classes.centered : classes.firstInput}>
        <TextField 
          label="URL" 
          value={url}
          onChange={(e) => {setUrl(e.target.value)}}
          variant="standard" 
          className={classes.input}
          error={urlError}
          helperText={urlErrorText}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4} className={isMobile ? classes.centered : classes.secondInput}>
        <TextField 
          label="Add a custom slug (optional)" 
          value={slug}
          onChange={(e) => {setSlug(e.target.value)}}
          variant="standard" 
          className={classes.input}
          error={slugError}
          helperText={slugErrorText}
        />
      </Grid>
      <Grid item xs={12} lg={4} className={classes.centered}>
        <Button
          variant="contained"
          color="primary"
          // disabled={status}
          onClick={handleSubmit}
          className={classes.shortenUrlBtn}
        >
          {loading ? <CircularProgress color="inherit" className={classes.circle} /> : ``}
          Shorten URL
        </Button>
      </Grid>

    </Grid>
  );
}

export default withStyles(styles)(InputForm);