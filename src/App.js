import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import PostDetails from "./Components/Posts/PostDetails";
import AuthPage from './Components/Auth/AuthPage';
import CreatePost from "./Components/Posts/CreatePost";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./Components/Auth/validation/formSchema";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

// import './App.css';

const logInUrl = "https://redditpost.herokuapp.com/api/auth/login";
// const registerUrl = 'https://redditpost.herokuapp.com/api/auth/register';
const registerUrl = "https://redditpost.herokualsdfkjasdlfkapp.com/api/auth/register";

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
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.message });
      })
      .finally(() => {
        setFormErrors({ ...formErrors, login: '' });
      });
  };

  //Send POST request to create/authenticate user
  const userFormPost = (url, isLoginAttempt) => {
    const loginError = isLoginAttempt
      ? "Sorry, we could not log you in with that username and password."
      : "Sorry, we were not able to create your account. Please try again in a few minutes.";

    setIsLoggingIn(true);
    axios.post(url, formValues)
      .then(res => {
        console.log('Response', res);
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
    setFormErrors({ ...formErrors, login: '' })
    userFormPost(logInUrl, true);
  };

  //Submit user registration
  const signUpSubmit = (e) => {
    e.preventDefault();
    setFormErrors({ ...formErrors, login: '' })
    userFormPost(registerUrl, false);
  };

  //When changing pages, erase form values using this
  const setFormToDefault = (e) => {
    e.preventDefault();
    setFormValues(defaultFormValues);
    setFormErrors(defaultErrors);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/signin">
            <AuthPage
              pageTitle={'Log In'}
              formValues={formValues}
              formErrors={formErrors}
              handleOnSubmit={logInSubmit}
              onInputChange={onInputChange}
              disabled={submitDisabled}
              isLoggingIn={isLoggingIn}
            />
          </Route>
          <Route path="/signup">
            <AuthPage
              pageTitle={'Sign Up'}
              formValues={formValues}
              formErrors={formErrors}
              handleOnSubmit={signUpSubmit}
              onInputChange={onInputChange}
              disabled={submitDisabled}
              isLoggingIn={isLoggingIn}
              isSignUp={true}
            />
          </Route>
          <Route path="/create" component={CreatePost} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
