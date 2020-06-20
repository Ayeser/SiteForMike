import React from "react";

function Nav(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">
        Mike's Site
      </a>
      <a className="navbar-brand" href="/">
        Landing Page
      </a>
      <a className="navbar-brand" href="/Search">
        Search
      </a>
    </nav>
  );
}

export default Nav;