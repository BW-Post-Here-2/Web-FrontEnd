import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = ({ setFormToDefault }) => {
    return (
        <ul className='right'>
            <li><NavLink 
            to='/signup'
            onClick={setFormToDefault}
            >Sign Up</NavLink></li>
            <li><NavLink 
            to='/signin'
            onClick={setFormToDefault}
            >Login</NavLink></li>
            {/* <li><NavLink to='/' className='btn btn-floating pink lighten-1'>R</NavLink></li> */}
        </ul>
    )
}

export default SignedOutLinks;