const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { GraphQLError } = require('graphql')

let authors = [
    {
        name: 'Robert Martin',
        id: "afa51ab0-344d-11e9-a414-719c6709cf3e",
        born: 1952,
    },
    {
        name: 'Martin Fowler',
        id: "afa5b6f0-344d-11e9-a414-719c6709cf3e",
        born: 1963
    },
    {
        name: 'Fyodor Dostoevsky',
        id: "afa5b6f1-344d-11e9-a414-719c6709cf3e",
        born: 1821
    },
    {
        name: 'Joshua Kerievsky', // birthyear not known
        id: "afa5b6f2-344d-11e9-a414-719c6709cf3e",
    },
    {
        name: 'Sandi Metz', // birthyear not known
        id: "afa5b6f3-344d-11e9-a414-719c6709cf3e",
    },
]

let books = [
    {
        title: 'Clean Code',
        published: 2008,
        author: 'Robert Martin',
        id: "afa5b6f4-344d-11e9-a414-719c6709cf3e",
        genres: ['refactoring']
    },
    {
        title: 'Agile software development',
        published: 2002,
        author: 'Robert Martin',
        id: "afa5b6f5-344d-11e9-a414-719c6709cf3e",
        genres: ['agile', 'patterns', 'design']
    },
    {
        title: 'Refactoring, edition 2',
        published: 2018,
        author: 'Martin Fowler',
        id: "afa5de00-344d-11e9-a414-719c6709cf3e",
        genres: ['refactoring']
    },
    {
        title: 'Refactoring to patterns',
        published: 2008,
        author: 'Joshua Kerievsky',
        id: "afa5de01-344d-11e9-a414-719c6709cf3e",
        genres: ['refactoring', 'patterns']
    },
    {
        title: 'Practical Object-Oriented Design, An Agile Primer Using Ruby',
        published: 2012,
        author: 'Sandi Metz',
        id: "afa5de02-344d-11e9-a414-719c6709cf3e",
        genres: ['refactoring', 'design']
    },
    {
        title: 'Crime and punishment',
        published: 1866,
        author: 'Fyodor Dostoevsky',
        id: "afa5de03-344d-11e9-a414-719c6709cf3e",
        genres: ['classic', 'crime']
    },
    {
        title: 'The Demon ',
        published: 1872,
        author: 'Fyodor Dostoevsky',
        id: "afa5de04-344d-11e9-a414-719c6709cf3e",
        genres: ['classic', 'revolution']
    },
]

const typeDefs = `#graphql
type Author {
    name: String!
    id: ID!
    born: Int
    bookCount: Int
}
type Book {
    title: String!
    published: Int!
    author: String!
    id: ID!
    genres: [String!]!
}
type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
}
type Mutation {
    addBook(
        title: String!,
        author: String!,
        published: Int!,
        genres: [String!]!
    ): [Book!]!
    editAuthor(
        name: String!
        setBornTo: Int!
    ): Author!
}
`

const resolvers = {
    Query: {
        bookCount: () => books.length,
        authorCount: () => authors.length,
        allBooks: (root, args) => {
            return books.filter(book => book.author === args.author || book.genres.findIndex((g) => g === args.genre) > -1)
        },
        allAuthors: () => {
            return authors.map(author => ({ ...author, bookCount: books.filter(book => book.author === author.name).length }))
        }
    },
    Mutation: {
        addBook: (root, args) => {
            books = [...books, {
                title: args.title,
                author: args.author,
                published: args.published,
                genres: args.genres
            }]
            if (authors.findIndex(author => author.name === args.author) === -1) {
                authors = [...authors, {
                    name: args.author,
                    id: String(Math.random()),
                    born: null
                }]
            }
            return books
        },
        editAuthor: (root, args) => {
            const selectedAuthor = authors.find(author => author.name === args.name)
            if (!selectedAuthor) {
                throw new GraphQLError('Author not found', {
                    extensions: {
                        code: 'BAD USER INPUT'
                    }
                })
            } else {
                selectedAuthor.born = args.setBornTo
                authors = [...authors.filter(author => author.name !== args.name), { ...selectedAuthor }]
                return selectedAuthor
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

async function startServer() {
    const { url } = await startStandaloneServer(server)
    console.log('server running at', url)
}

startServer()
