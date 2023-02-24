import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const GET_AUTHORS = gql`
  query {
    allAuthors {
      id
      name
      born
    }
  }
`;

const GET_AUTHOR_BOOKS = gql`
query($author: String!) {
  allBooks(author: $author) {
      id
      title
  }
}
`

const Author = ({ author }) => {
  const { loading, error, data } = useQuery(GET_AUTHOR_BOOKS, {
    variables: {
      author: author?.name
    }
  })

  return (
    <tr>
      <td>{author.name}</td>
      <td>{author.born}</td>
      <td>{data?.allBooks?.length}</td>
    </tr>
  )
}

const Authors = () => {
  const { loading, error, data: authorsData } = useQuery(GET_AUTHORS);

  return (
    <>
      <Link to='/books'>
        <button>books</button>
      </Link>
      <p>authors</p>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>born</th>
            <th>books</th>
          </tr>
        </thead>
        <tbody>
          {
            authorsData?.allAuthors?.map(author => <Author key={author.id} author={author} />)
          }
        </tbody>

      </table>
    </>
  );
};

export default Authors;