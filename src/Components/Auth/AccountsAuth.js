import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  userAction,
  fetchPost,
  deletePost,
  savePost,
  createPost,
} from "../../Store/Actions/postActions";

const Account = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();

  const onInputUserName = (e) => {
    setUserName(e.target.value);
  };
  const passwordInput = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && userPassword) {
      dispatch(userAction(userName, userPassword));
    } else {
      alert("New username and password is required");
    }
  };
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="white">
        <h5 className="grey-text text-darken-3">New Credentials</h5>

        <div className="input-field">
          <label htmlFor="title" className="username-input">
            New Username
          </label>
          <input
            type="text"
            id="title"
            values={userName}
            onChange={onInputUserName}
          />
        </div>
        <div className="input-field">
          <label className="password-input">New Password </label>
          <input
            type="text"
            id="title"
            values={userPassword}
            type="password"
            onChange={passwordInput}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="btn light-blue lighten-1 z-depth-2"
        >
          Save User Settings
        </button>
      </form>
    </div>
  );
};

export default Account;
