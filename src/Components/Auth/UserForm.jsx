import React from 'react';

const UserForm = (props) => {

    const { username, password, onInputChange, handleOnSubmit, buttonText, isSignUp, disabled, formErrors } = props;

    return (
        <form onSubmit={handleOnSubmit}>
            <label>Username
                <input
                    name='username'
                    type='text'
                    value={username}
                    onChange={onInputChange}
                />
            </label>

            <label>Password
                <input
                    name='password'
                    type='password'
                    value={password}
                    onChange={onInputChange}
                />
            </label>
            {isSignUp &&
                <div>
                    <p>{formErrors.username}</p>
                    <p>{formErrors.password}</p>
                </div>
            }
            <p>{formErrors.login}</p>
            <button disabled={disabled}>{buttonText}</button>
        </form>
    )
}

export default UserForm;