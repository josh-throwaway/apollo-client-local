import {useQuery, gql} from '@apollo/client';

export default function GetUsers() {
  const { loading, error, data } = useQuery(gql`
    {
      allTestUsers {
        name,
        id
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return data.allTestUsers.map(({ name, id }) => (
    <div key={id}>
      <p>
        {name}: {id}
      </p>
    </div>
  ));
}