import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import PostDetails from './Components/Posts/PostDetails';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import CreatePost from './Components/Posts/CreatePost';
import axios from 'axios';

// import './App.css';

const logInUrl = 'https://redditpost.herokuapp.com/api/auth/login';
const registerUrl = 'https://redditpost.herokuapp.com/api/auth/register';

function App() {

  //Temporary State Hooks for forms
  const defaultFormValues = {
    username: '',
    password: ''
  }
  const [formValues, setFormValues] = useState(defaultFormValues);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
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
              handleOnSubmit={logInSubmit}
              onInputChange={onInputChange} />
          </Route>
          <Route path='/signup'>
            <SignUp
              formValues={formValues}
              handleOnSubmit={signUpSubmit}
              onInputChange={onInputChange} />
          </Route>
          <Route path='/create' component={CreatePost} />
        </Switch>

      </div>

    </BrowserRouter >
  );
}

export default App;
