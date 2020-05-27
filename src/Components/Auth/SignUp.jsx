import React from 'react';
import UserForm from './UserForm';

const SignUp = (props) => {

    const { username, password, handleOnSubmit, onInputChange, disabled, formErrors, isLoggingIn, pageTitle } = props;

    return (
        <div className="SignInForm">
            <h2>{pageTitle}</h2>
            <UserForm
                username={username}
                password={password}
                handleOnSubmit={handleOnSubmit}
                onInputChange={onInputChange}
                buttonText={pageTitle}
                isSignUp={true}
                disabled={disabled}
                formErrors={formErrors}
                isLoggingIn={isLoggingIn}
            />
        </div>
    )
}

export default SignUp;