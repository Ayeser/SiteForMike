import React from 'react';
import './App.css';
import Landing from "./pages/Landing";
import Search from "./pages/Search";

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

        <Route exact path={"/Search"}>
        <Search />
        </Route>

    </Router>
  )
}

export default App;