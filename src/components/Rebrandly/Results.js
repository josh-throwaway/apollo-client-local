import React from "react";
import {useQuery} from '@apollo/client';
import { Grid, withStyles } from "@material-ui/core";
import styles from './styles';
import {ArrowRightAlt , ArrowDownward} from '@material-ui/icons';
import {LINKS_QUERY} from '../../graphqlOperations';

function Results(props) {
  const {isMobile, classes} = props;

  const { loading, error, data } = useQuery(LINKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <Grid container>
      {data.allLinks.map(({ url, slug, id }, index) => (
        <Grid container key={index} className={classes[`result${index%2}`]}>
          <Grid item xs={12} md={5} className={classes.centered}>          
            <a href={url} target="_blank">{url}</a>
          </Grid>
          <Grid item xs={12} md={2} className={classes.centered}>
            {!isMobile ? <ArrowRightAlt /> : <ArrowDownward />}
          </Grid>
          <Grid item xs={12} md={5} className={classes.centered}> 
            <a href={url} target="_blank">https://hdwy.link/{slug}</a>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
export default withStyles(styles)(Results);