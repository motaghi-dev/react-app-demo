import { useState } from 'react';
import './App.css'
import { useQuery, gql, useMutation} from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
  getUsers {
    name
  }
}`;

const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
  getUserById(id: $id) {
    name
  }
}`;

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!, $isMarried: Boolean!) {
  createUser(name: $name, age: $age, isMarried: $isMarried) {
    id
    name
    age
    isMarried
  }
}`;

function App() {
  const [User, SetUser] = useState({});
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <>
      <div className="App">
        <h1>Users</h1>
        <input type="text" placeholder="Name" onChange={(e) => SetUser({...User, name: e.target.value})} />
        <input type="number" placeholder="Age" onChange={(e) => SetUser({...User, age: parseInt(e.target.value)})} />
        <label>
          Married:
          <input type="checkbox" onChange={(e) => SetUser({...User, isMarried: e.target.checked})} />
        </label>
        <button onClick={() => createUser({ variables: { name: User.name, age: User.age, isMarried: User.isMarried } })}>
          Create User
        </button>
      </div>
    </>
  )
}

export default App
