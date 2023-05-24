import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <header>
        <h1 className="header_title">MyTube</h1>
      </header>
    </Link>
  );
};

export default Header;
