const { gql } = require("apollo-server");

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovie: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }
 
    input CreateUserInput {
        name: String!
        username: String!
        age: Int = 18
        nationality: Nationality = INDIAN
    }

    input UpdateUserNameInput {
        id: ID!
        newUserName: String!
    }
    
    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUserName(input: UpdateUserNameInput!): User
        deleteUser(id: ID!): User
    }

    type Query {
        users: [User!]!
        user(id: ID!): User! 
        movies: [Movie!]!
        movie(name: String!): Movie!
        listOfMoviesAfter2000: [Movie]
    }

    enum Nationality {
        Australian
        SPANISH
        JAPANESE
        CANADIAN
        INDIAN
        CHINESE
        ITALIAN
        MEXICAN
        BRITISH
        AMERICAN
    }
`;



module.exports = { typeDefs };