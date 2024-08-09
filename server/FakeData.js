const UserList = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "username": "alicej",
    "age": 28,
    "nationality": "AMERICAN",
    "friends": [
        {
            "id": 2,
            "name": "Bob Smith",
            "username": "bobsmith",
            "age": 35,
            "nationality": "BRITISH"
          },
          {
            "id": 3,
            "name": "Carlos Gonzalez",
            "username": "carlitosg",
            "age": 42,
            "nationality": "MEXICAN"
          },
          {
            "id": 4,
            "name": "Diana Rossi",
            "username": "dianar",
            "age": 30,
            "nationality": "ITALIAN"
          },
    ],
    "favoriteMovie": {
      "id": 8,
      "name": "The Godfather",
      "yearOfPublication": 1972,
      "isInTheaters": false
    },
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "username": "bobsmith",
    "age": 35,
    "nationality": "BRITISH"
  },
  {
    "id": 3,
    "name": "Carlos Gonzalez",
    "username": "carlitosg",
    "age": 42,
    "nationality": "MEXICAN",
    "friends": [
        {
            "id": 6,
            "name": "Faisal Khan",
            "username": "faisalk",
            "age": 31,
            "nationality": "INDIAN"
          },
          {
            "id": 7,
            "name": "Grace Lee",
            "username": "gracelee",
            "age": 29,
            "nationality": "CANADIAN"
          },
    ]
  },
  {
    "id": 4,
    "name": "Diana Rossi",
    "username": "dianar",
    "age": 30,
    "nationality": "ITALIAN"
  },
  {
    "id": 5,
    "name": "Evelyn Wu",
    "username": "evelynw",
    "age": 25,
    "nationality": "CHINESE"
  },
  {
    "id": 6,
    "name": "Faisal Khan",
    "username": "faisalk",
    "age": 31,
    "nationality": "INDIAN"
  },
  {
    "id": 7,
    "name": "Grace Lee",
    "username": "gracelee",
    "age": 29,
    "nationality": "CANADIAN"
  },
  {
    "id": 8,
    "name": "Hiroshi Tanaka",
    "username": "hiroshit",
    "age": 37,
    "nationality": "JAPANESE"
  },
  {
    "id": 9,
    "name": "Isabella Martinez",
    "username": "isamartinez",
    "age": 27,
    "nationality": "SPANISH"
  },
  {
    "id": 10,
    "name": "Jack Wilson",
    "username": "jackw",
    "age": 33,
    "nationality": "Australian"
  }
];

const MovieList = [
  {
    "id": 1,
    "name": "Inception",
    "yearOfPublication": 2010,
    "isInTheaters": false
  },
  {
    "id": 2,
    "name": "The Dark Knight",
    "yearOfPublication": 2008,
    "isInTheaters": false
  },
  {
    "id": 3,
    "name": "Interstellar",
    "yearOfPublication": 2014,
    "isInTheaters": false
  },
  {
    "id": 4,
    "name": "The Matrix",
    "yearOfPublication": 1999,
    "isInTheaters": false
  },
  {
    "id": 5,
    "name": "Avengers: Endgame",
    "yearOfPublication": 2019,
    "isInTheaters": true
  },
  {
    "id": 6,
    "name": "Spider-Man: No Way Home",
    "yearOfPublication": 2021,
    "isInTheaters": true
  },
  {
    "id": 7,
    "name": "The Shawshank Redemption",
    "yearOfPublication": 1994,
    "isInTheaters": false
  },
  {
    "id": 8,
    "name": "The Godfather",
    "yearOfPublication": 1972,
    "isInTheaters": false
  },
  {
    "id": 9,
    "name": "Jurassic World",
    "yearOfPublication": 2015,
    "isInTheaters": false
  },
  {
    "id": 10,
    "name": "The Lion King",
    "yearOfPublication": 1994,
    "isInTheaters": false
  }
];

module.exports = { UserList, MovieList };