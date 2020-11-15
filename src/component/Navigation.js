import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation_body">
      <Link className="nav_link1" to="/">
        HOME
      </Link>
      <Link
        className="nav_link2"
        to={{ pathname: "/about", state: { fromNavigation: true } }}
      >
        ABOUT
      </Link>
    </div>
  );
}

export default Navigation;
