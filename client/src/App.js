import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import { useUser } from 'reactfire';
import './App.css';

function App() {
  const user = useUser();
  return (
    <div className="App">
      {
        user &&
        <Logout />
      }
      {
        !user &&
        <>
          <Signup />
          <Login />
        </>
      }
    </div>
  );
}

export default App;