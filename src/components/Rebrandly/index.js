import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import Results from './Results';
import InputForm from './Form';
import InfoPanel from "./infoPanel/index";

const getIsMobile = () => window.innerWidth <= 959;

export default function Rebrandly() {
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

  return (
    
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <InfoPanel isMobile={isMobile}/>
        <InputForm isMobile={isMobile}/>
        <Results isMobile={isMobile}/>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
