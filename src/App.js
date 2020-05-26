import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import PostDetails from './Components/Posts/PostDetails';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import CreatePost from './Components/Posts/CreatePost';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './Components/Auth/validation/formSchema';

// import './App.css';

const logInUrl = 'https://redditpost.herokuapp.com/api/auth/login';
const registerUrl = 'https://redditpost.herokuapp.com/api/auth/register';

function App() {

  const defaultFormValues = {
    username: '',
    password: ''
  }

  const [formValues, setFormValues] = useState(defaultFormValues);
  const [formErrors, setFormErrors] = useState(defaultFormValues);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  //Form validation for login/signup using yup
  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setSubmitDisabled(!valid);
      })
      .catch(err => console.log(err));
  }, [formValues])


  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })

    //Add validation errors to list of form errors
    yup.reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.message})
      })
  }

  const userFormPost = (url) => {
    axios.post(url, formValues)
      .then(res => {
        console.log('Response', res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const logInSubmit = (e) => {
    e.preventDefault();
    userFormPost(logInUrl);
  }

  const signUpSubmit = (e) => {
    e.preventDefault();
    userFormPost(registerUrl);
  }

  return (
    <BrowserRouter>

      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/post/:id' component={PostDetails} />
          <Route path='/signin'>
            <SignIn
              formValues={formValues}
              formErrors={formErrors}
              handleOnSubmit={logInSubmit}
              onInputChange={onInputChange}
              disabled={submitDisabled} />
          </Route>
          <Route path='/signup'>
            <SignUp
              formValues={formValues}
              formErrors={formErrors}
              handleOnSubmit={signUpSubmit}
              onInputChange={onInputChange}
              disabled={submitDisabled} />
          </Route>
          <Route path='/create' component={CreatePost} />
        </Switch>

      </div>

    </BrowserRouter >
  );
}

export default App;
