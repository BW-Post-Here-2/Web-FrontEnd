import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = ({ setFormToDefault }) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup" onClick={setFormToDefault}>
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" onClick={setFormToDefault}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" onClick={setFormToDefault}>
          New Post
        </NavLink>
      </li>
      <li>
        <NavLink to="/savedposts" onClick={setFormToDefault}>
          Saved Post
        </NavLink>
      </li>
      <li>
        <NavLink to="/postdetail" onClick={setFormToDefault}>
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink to="/account" onClick={setFormToDefault}>
          Account
        </NavLink>
      </li>
      <li
        onClick={() => {
          localStorage.clear();
          window.location.href = "/signin";
        }}
      >
        <NavLink to="/signin" onClick={setFormToDefault}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          onClick={setFormToDefault}
          className="btn btn-floating blue lighten-1"
        >
          R
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
