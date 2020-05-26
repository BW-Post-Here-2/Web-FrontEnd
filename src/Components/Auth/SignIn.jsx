import React from 'react';

const SignIn = (props) => {
    const { username, password, handleOnSubmit, onInputChange } = props;
    return (
        <div className="SignInForm">
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
            <button>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;