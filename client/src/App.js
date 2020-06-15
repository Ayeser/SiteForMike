import React from 'react';
import './App.css';
import Landing from "./pages/Landing";

import {
  BrowserRouter as Router,
  // Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
 <Route exact path={"/"}>
        <Landing />
        </Route>

    </Router>
  )
}

export default App;