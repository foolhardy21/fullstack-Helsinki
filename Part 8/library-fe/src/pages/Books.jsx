import { gql, useMutation, useQuery } from "@apollo/client"
import { useState } from "react"
import { Link } from "react-router-dom"

const GET_BOOKS = gql`
query {
    allBooks {
        id
        title
        author
        published
    }
}
`

const ADD_BOOK = gql`
mutation($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
    addBook(title: $title, author: $author, published: $published, genres: $genres) {
        title
        author
        published
    }
}
`

const Book = ({ book }) => {
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.published}</td>
        </tr>
    )
}

const Books = () => {
    const [allBooks, setAllBooks] = useState([])
    const [addBookForm, setAddBookForm] = useState(false)
    const [genres, setGenres] = useState([''])
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [published, setPublished] = useState('')
    const { loading, error, data } = useQuery(GET_BOOKS)
    const [addBookFunction, { data: newBooks, loading: addBookLoading, error: addBookError }] = useMutation(ADD_BOOK, {
        refetchQueries: [{ query: GET_BOOKS }]
    })

    return (
        <>
            <Link to='/authors'>
                <button>authors</button>
            </Link>
            <button onClick={() => setAddBookForm(true)}>add a book</button>
            <p>books</p>
            {
                addBookForm &&
                <form onSubmit={(e) => {
                    e.preventDefault()
                    addBookFunction({
                        variables: {
                            title,
                            author,
                            published: Number(published),
                            genres
                        }
                    })
                }}>
                    <input type="text" placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder="author name" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <input type="number" placeholder="published in" value={published} onChange={(e) => setPublished(e.target.value)} />
                    {
                        genres.map((genre, index) => <input key={index} type="text" placeholder="genre" value={genre} onChange={(e) => {
                            setGenres(genres.map((genre, i) => i === index ? e.target.value : genre))
                        }} />)
                    }
                    <button type="button" onClick={() => setGenres(genres => [...genres, ''])}>add a genre</button>
                    <button type="submit">add</button>
                </form>
            }
            <table>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>author</th>
                        <th>published</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.allBooks?.map(book => <Book key={book.id} book={book} />)
                    }
                </tbody>

            </table>
        </>
    )
}

export default Books