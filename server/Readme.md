# Create node project
- npm init

# install packages to start graphQL
- npm install apollo-server graphql

- npm i nodemon lodash

# Give cmd to start in package.json under scripts
- "start": "nodemon index.js"

- Installing extension Apollo GraphQL

# npm start - (In server folder) To start the project

# Understanding basic concepts
- type User {
        id: ID
        name: String!   
    }
  Here ! after String signifies the name field is important 

- users: [User] 
   Signifies users to return array of type of User 

- users: User
   Signifies user to return a single User

- users: [User!]!
   Signifies users will be type of User and it can't be no
   and if we receive the list it should be of type User