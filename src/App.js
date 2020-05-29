import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import PostDetails from "./Components/Posts/PostDetails";
import AuthPage from "./Components/Auth/AuthPage";
import CreatePost from "./Components/Posts/CreatePost";
import axios from "axios";
import SavedPosts from "./Components/Posts/SavedPosts";
import * as yup from "yup";
import formSchema from "./Components/Auth/validation/formSchema";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AccountsAuth from "./Components/Auth/AccountsAuth";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

// import './App.css';

const logInUrl = "https://redditpost.herokuapp.com/api/auth/login";
const registerUrl = "https://redditpost.herokuapp.com/api/auth/register";

const defaultFormValues = {
  username: "",
  password: "",
};

const defaultErrors = {
  username: "",
  password: "",
  login: "",
};

function App() {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [formErrors, setFormErrors] = useState(defaultErrors);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  //useHistory can't be used in App outside of Router. Use setHistoryState to set history inside a child component if needed.
  const [historyState, setHistoryState] = useState(null);

  //Form validation for login/signup using yup
  useEffect(() => {
    formSchema
      .isValid(formValues)
      .then((valid) => {
        setSubmitDisabled(!valid);
      })
      .catch((err) => console.log(err));
  }, [formValues]);

  //Control validation error messages
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "", login: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.message, login: "" });
      });
  };

  //Send POST request to create/authenticate user
  const userFormPost = (url, isLoginAttempt) => {
    const loginError = isLoginAttempt
      ? "Sorry, we could not log you in with that username and password."
      : "Sorry, we were not able to create your account. Please try again in a few minutes.";

    setIsLoggingIn(true);
    axios
      .post(url, formValues)
      .then((res) => {
        console.log("Response", res);
        localStorage.setItem("token", res.data.token);
        setFormErrors({ ...formErrors, login: "" });
        setFormToDefault();
        redirectUser(historyState, "/");
      })
      .catch((err) => {
        console.log(err);
        setFormErrors({ ...formErrors, login: loginError });
      })
      .finally(() => {
        setIsLoggingIn(false);
      });
  };

  //Submit user login
  const logInSubmit = (e) => {
    e.preventDefault();
    setFormErrors({ ...formErrors, login: "" });
    userFormPost(logInUrl, true);
  };

  //Submit user registration
  const signUpSubmit = (e) => {
    e.preventDefault();
    setFormErrors({ ...formErrors, login: "" });
    userFormPost(registerUrl, false);
  };

  //When changing pages, erase form values using this
  const setFormToDefault = (e) => {
    setFormValues(defaultFormValues);
    setFormErrors(defaultErrors);
  };

  //Redirect the user, passing in historyState and URL to route to.
  const redirectUser = (history, redirectUrl) => {
    try {
      history.push(redirectUrl);
    } catch {
      //do nothing
    }
  };

  return (
    <BrowserRouter>
      <div className="App grey darken-4">
        <Navbar setFormToDefault={setFormToDefault} />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/signin">
            <AuthPage
              pageTitle={"Log In"}
              formValues={formValues}
              formErrors={formErrors}
              handleOnSubmit={logInSubmit}
              onInputChange={onInputChange}
              disabled={submitDisabled}
              isLoggingIn={isLoggingIn}
              setHistoryState={setHistoryState}
            />
          </Route>
          <Route path="/signup">
            <AuthPage
              pageTitle={"Sign Up"}
              formValues={formValues}
              formErrors={formErrors}
              handleOnSubmit={signUpSubmit}
              onInputChange={onInputChange}
              disabled={submitDisabled}
              isLoggingIn={isLoggingIn}
              setHistoryState={setHistoryState}
              isSignUp={true}
            />
          </Route>
          <Route path="/savedposts" component={SavedPosts} />
          <Route path="/create" component={CreatePost} />

          <PrivateRoute path="/account" component={AccountsAuth} />

          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/postdetail" component={PostDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
