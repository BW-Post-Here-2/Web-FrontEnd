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

const logInURL = 'https://redditpost.herokuapp.com/api/auth/login';
const registerURL = 'https://redditpost.herokuapp.com/api/auth/register';

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

  const userLogin = () => {
    axios.post(logInURL, formValues)
      .then(res => {
        console.log('Response', res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    userLogin();
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
              handleOnSubmit={handleOnSubmit}
              onInputChange={onInputChange} />
          </Route>
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreatePost} />
        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;
