import {useQuery, gql} from '@apollo/client';

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

  console.log(data)

  return data.allLinks.map(({ url, slug, id }) => (
    <div key={id}>
      <p>
        url : {url}
        slug: {slug}
      </p>
    </div>
  ));
}