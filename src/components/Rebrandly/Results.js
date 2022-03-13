import React, { useState, useEffect } from "react";
import {useQuery, gql} from '@apollo/client';
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {ArrowRightAlt , ArrowDownward} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({

  result1: {
    border: "1px solid black"
  },
  result0: {
    backgroundColor: "#c5c5c5",
    borderLeft: "1px solid black",
    borderRight: "1px solid black"
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const getIsMobile = () => window.innerWidth <= 959;


export default function Results() {
  const classes = useStyles();
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


  const { loading, error, data } = useQuery(gql`
    {
      allLinks {
        slug,
        url,
        id
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <Grid container>
      {data.allLinks.map(({ url, slug, id }, index) => (
        <Grid container key={index} className={classes[`result${index%2}`]}>
          <Grid item xs={12} md={5} className={classes.centered}>          
            <Typography>{url}</Typography>
          </Grid>
          <Grid item xs={12} md={2} className={classes.centered}>
            {!isMobile ? <ArrowRightAlt /> : <ArrowDownward />}
          </Grid>
          <Grid item xs={12} md={5} className={classes.centered}> 
            <Typography>https://hdwy.link/{slug}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}