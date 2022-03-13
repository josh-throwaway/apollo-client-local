import {useQuery, gql} from '@apollo/client';
import { Grid, Typography } from "@material-ui/core";


export default function Results() {
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
      {data.allLinks.map(({ url, slug, id }) => (
        <Grid container key={id}>
          <Grid item xs={12} md={8}>          
            <Typography>{url}</Typography>
          </Grid>
          <Grid item xs={12} md={4}> 
            <Typography>-> https://hdwy.link/{slug}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}