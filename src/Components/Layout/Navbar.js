//dependencies
import React from "react";
import { Link } from "react-router-dom";

//components
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = ({ setFormToDefault }) => {
  return (
    <nav className="nav-wrapper orange accent-3">
      <div className="container">
        {/* <Link to="/" className="brand-logo">
          Reddit Nav
        </Link> */}
        <SignedInLinks setFormToDefault={setFormToDefault} />
        {/* <SignedOutLinks setFormToDefault={setFormToDefault} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
