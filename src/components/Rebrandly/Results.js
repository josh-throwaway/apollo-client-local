import React, { useState, useEffect } from "react";
import {useQuery} from '@apollo/client';
import { Grid } from "@material-ui/core";
import styles from './styles';
import {ArrowRightAlt , ArrowDownward} from '@material-ui/icons';
import {LINKS_QUERY} from '../../graphqlOperations';

const getIsMobile = () => window.innerWidth <= 959;

export default function Results() {
  const classes = styles();
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
        setIsMobile(getIsMobile());
    }

    window.addEventListener("resize", onResize);

    return () => {
        window.removeEventListener("resize", onResize);
    }
}, []);


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