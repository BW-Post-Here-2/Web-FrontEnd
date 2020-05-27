import React from 'react';
import UserForm from './UserForm';

const SignUp = (props) => {

    const { username, password, handleOnSubmit, onInputChange, disabled, formErrors, isLoggingIn } = props;

    return (
        <div className="SignInForm">
            <h2>Sign Up</h2>
            <UserForm
                username={username}
                password={password}
                handleOnSubmit={handleOnSubmit}
                onInputChange={onInputChange}
                buttonText={'Sign Up'}
                isSignUp={true}
                disabled={disabled}
                formErrors={formErrors}
            />
            {isLoggingIn && <p>Signing up, please wait...</p>}
        </div>
    )
}

export default SignUp;