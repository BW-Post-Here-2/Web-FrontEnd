import React from 'react';
import UserForm from './UserForm';

const AuthPage = (props) => {

    const {
        username,
        password,
        handleOnSubmit,
        onInputChange,
        disabled,
        formErrors,
        isLoggingIn,
        isSignUp,
        pageTitle
    } = props;

    return (
        <div className="SignInForm">
            <h2>{pageTitle}</h2>
            <UserForm
                username={username}
                password={password}
                handleOnSubmit={handleOnSubmit}
                onInputChange={onInputChange}
                buttonText={pageTitle}
                disabled={disabled}
            />
            <div className='authMessages'>
                <p>{formErrors.login}</p>
                {isLoggingIn &&
                    (isSignUp
                        ? <p>Signing up, please wait...</p>
                        : <p>Logging in, please wait...</p>)}
                {isSignUp &&
                    <div>
                        <p>{formErrors.username}</p>
                        <p>{formErrors.password}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default AuthPage;