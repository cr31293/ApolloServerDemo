const  { ApolloServer , gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Author {
        name: String
        books: [Book]
    }

    type Query {
        books: [Book]
    }
    `;

const books = [
    {
        title: 'Eragon',
        author: 'Christopher Paolini',
    },
    {
        title: 'Eldest',
        author: 'Christopher Paolini',
    },
    {
        title: 'Brisingr',
        author: 'Christopher Paolini',
    },
    {
        title: 'Inheritance',
        author: 'Christopher Paolini',
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
    },
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K. Rowling',
    },
    {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
    },
    {
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J.K. Rowling',
    },
    {
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J.K. Rowling',
    },
];

const resolvers = {
    Query: {
        books: () => books,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
