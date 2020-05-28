import React from 'react';
import UserForm from './UserForm';

const AuthPage = (props) => {

    const {
        formValues,
        handleOnSubmit,
        onInputChange,
        disabled,
        formErrors,
        isLoggingIn,
        isSignUp,
        pageTitle
    } = props;

    return (
        <div className="SignInForm container">
            
            <UserForm
                username={formValues.username}
                password={formValues.password}
                handleOnSubmit={handleOnSubmit}
                onInputChange={onInputChange}
                pageTitle={pageTitle}
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