export const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
        publishedYear: Int
        author: Author
    }

    type Author {
        id: ID!
        name: String!
        book: [Book]
    }

    type Query {
        authors: [Author]
        books: [Book]  
    }

    type Mutation {
        addBook(title: String!, publishedYear: Int, authorId: ID!): Book!
    }
`;

