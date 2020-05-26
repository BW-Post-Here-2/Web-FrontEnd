import React from 'react';
import UserForm from './UserForm';

const SignUp = (props) => {

    const { username, password, handleOnSubmit, onInputChange, disabled, formErrors } = props;
    
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
        </div>
    )
}

export default SignUp;