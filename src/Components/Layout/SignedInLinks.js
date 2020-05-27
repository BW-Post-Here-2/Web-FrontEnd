import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className='right'>
            <li><NavLink to='/create'>New Post</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating light-blue lighten-1'>R</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;