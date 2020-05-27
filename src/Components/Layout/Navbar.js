//dependencies
import React from 'react';
import { Link } from 'react-router-dom';

//components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className='nav-wrapper orange darken-1'>
            <div className='container'>
                <Link to='/' className="brand-logo">Reddit Nav</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;