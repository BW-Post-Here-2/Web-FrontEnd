import React from 'react';

const UserForm = (props) => {

    const { username, password, onInputChange, handleOnSubmit, buttonText, disabled } = props;

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
            <button disabled={disabled}>{buttonText}</button>
            
        </form>
    )
}

export default UserForm;