# React App Demo

A full-stack demo app using React, Apollo Client, and a GraphQL API built with Apollo Server.

## Tech Stack

**Frontend**
- React 19
- Apollo Client
- Vite

**Backend**
- Apollo Server (standalone)
- GraphQL

## Project Structure

```
react-app/
├── client/        # React frontend (Vite)
│   └── src/
│       └── App.jsx
└── server/        # Apollo GraphQL server
    └── server.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install dependencies

```bash
# Root
npm install

# Client
cd client && npm install

# Server
cd server && npm install
```

### Run the app

Start the GraphQL server (port 4000):

```bash
cd server
node server.js
```

Start the React frontend (port 5173):

```bash
cd client
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## GraphQL API

The server exposes the following schema at `http://localhost:4000`:

### Queries

```graphql
# Get all users
query {
  getUsers {
    id
    name
    age
    isMarried
  }
}

# Get a user by ID
query {
  getUserById(id: "1") {
    id
    name
    age
    isMarried
  }
}
```

### Mutations

```graphql
# Create a new user
mutation {
  createUser(name: "Alice", age: 30, isMarried: true) {
    id
    name
    age
    isMarried
  }
}
```

## License

ISC
