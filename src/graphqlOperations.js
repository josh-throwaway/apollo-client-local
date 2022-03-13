import {gql} from '@apollo/client';

export const ADD_LINK = gql`
    mutation($url: String!, $slug: String) {
    createLink(url: $url, slug: $slug) {
      url, id, slug
    }
  }
`; 

export const QUERY_BY_SLUG = gql`
    query($slug: String!) {
      linkBySlug(slug: $slug) {
        url, slug
    }
  }
`;

export const LINKS_QUERY = gql`
  {
    allLinks {
      slug,
      url,
      id
    }
  }
`;