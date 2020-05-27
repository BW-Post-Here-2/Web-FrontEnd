import React from 'react';

const UserForm = (props) => {

    const { username, password, onInputChange, handleOnSubmit, pageTitle, disabled } = props;

    return (
        <form className='white' onSubmit={handleOnSubmit}>
            <h5 className='grey-text text-darken-3'>{pageTitle}</h5>
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

            <button className='btn light-blue lighten-1 z-depth-0' disabled={disabled}>{pageTitle}</button>

        </form>
    )
}

export default UserForm;