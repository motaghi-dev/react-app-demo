import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const users = [
  { id: '1', name: 'Alice', age: 30, isMarried: true },
  { id: '2', name: 'Bob', age: 25, isMarried: false },
  { id: '3', name: 'Charlie', age: 35, isMarried: true },
  { id: '4', name: 'David', age: 28, isMarried: false },
  { id: '5', name: 'Eve', age: 32, isMarried: true },
  { id: '6', name: 'Frank', age: 27, isMarried: false },
  { id: '7', name: 'Grace', age: 29, isMarried: true },
  { id: '8', name: 'Heidi', age: 31, isMarried: false },
  { id: '9', name: 'Ivan', age: 26, isMarried: true },
  { id: '10', name: 'Judy', age: 33, isMarried: false },
];



const typeDefs = `#graphql
  type Query {
    getUsers: [User]
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, age: Int, isMarried: Boolean): User
  }

  type User {
    id: ID!
    name: String!
    age: Int
    isMarried: Boolean
  }
`;
const resolvers = {
  Query: {
    getUsers: () => {
        console.log(users);
        return users;
    },
    getUserById: (parent, args) => {
        return users.find(user => user.id === args.id);
    } 
  },
  Mutation: {
    createUser: (parent, args) => {
        const newUser = {
            id: String(users.length + 1),
            name: args.name,
            age: args.age,
            isMarried: args.isMarried
        };
        users.push(newUser);
        console.log(newUser);
        return newUser;
    }
  }
};

const server = new ApolloServer({typeDefs, resolvers});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});



console.log(`🚀  Server ready at: http://localhost:4000/`);