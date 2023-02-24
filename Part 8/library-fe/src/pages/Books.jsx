import { gql, useQuery } from "@apollo/client"
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
    const { loading, error, data } = useQuery(GET_BOOKS)

    return (
        <>
            <Link to='/authors'>
                <button>authors</button>
            </Link>
            <p>books</p>
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