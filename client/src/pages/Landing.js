import React from "react";
import Signup from '../components/Signup';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Nav from '../components/Nav/index';
import { useUser } from 'reactfire';

function Landing() {
    const user = useUser();
    return (
      <div className="App">
         <Nav />
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

export default Landing;