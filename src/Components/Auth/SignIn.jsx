import React from 'react';
import UserForm from './UserForm';

const SignIn = (props) => {
    const { username, password, handleOnSubmit, onInputChange, disabled, formErrors } = props;
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
                disabled={disabled}
                formErrors={formErrors}
            />
        </div>
    )
}

export default SignIn;