import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
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

const AUTHOR_BIRTH = gql`
mutation($name: String!, $setBornTo: Int!) {
  editAuthor(name: $name, setBornTo: $setBornTo) {
    id
    name
    born
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
  const [authorBirthForm, setAuthorBirthForm] = useState(false)
  const [authorName, setAuthorName] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const { loading, error, data: authorsData } = useQuery(GET_AUTHORS);
  const [editAuthor] = useMutation(AUTHOR_BIRTH, {
    refetchQueries: [{ query: GET_AUTHORS }]
  })

  return (
    <>
      <Link to='/books'>
        <button>books</button>
      </Link>
      <button onClick={() => setAuthorBirthForm(true)}>add birth year</button>
      {
        authorBirthForm &&
        <form onSubmit={(e) => {
          e.preventDefault()
          editAuthor({
            variables: {
              name: authorName,
              setBornTo: Number(birthYear)
            }
          })
        }}>
          <input type="text" placeholder="author name" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
          <input type="number" placeholder="year of birth" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
          <button type="submit">add birth year</button>
        </form>
      }
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