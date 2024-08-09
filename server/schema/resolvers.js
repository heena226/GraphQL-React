const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, {name: name});
            return movie;
        },
        listOfMoviesAfter2000 : () => {
            const resultMovies = _.filter(MovieList, (movie) => {
                return movie.yearOfPublication >= 2000;
            });            
            return resultMovies;
        },
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            user.id = UserList.length + 1; // Assign a new ID
            UserList.push(user);
            return user;
        },
        updateUserName: (parent, args) => {
            const userId = Number(args.input.id);
            const newUserName = args.input.newUserName;
            const existingUser = _.find(UserList, {id: userId});
            existingUser.username = newUserName;
            return existingUser;
        },
        deleteUser: (parent, args) => {
            const userId = args.id;
            _.remove(UserList, (user) => user.id = Number(id));
            return null;

        }
    }
};

module.exports = { resolvers };