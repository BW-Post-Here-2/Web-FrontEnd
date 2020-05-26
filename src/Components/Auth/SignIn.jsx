import React from 'react';
import UserForm from './UserForm';

const SignIn = (props) => {
    const { username, password, handleOnSubmit, onInputChange } = props;
    return (
        <div className="SignInForm">
            <h2>Log In</h2>
            <UserForm
                username={username}
                password={password}
                handleOnSubmit={handleOnSubmit}
                onInputChange={onInputChange}
                buttonText={'Log In'}
                signUp={false}
            />
        </div>
    )
}

export default SignIn;