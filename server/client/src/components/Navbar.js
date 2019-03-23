import React from 'react';
import gainzLogo from '../images/gainz-logo.png';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>About</li>
                <li>Plans</li>
                <img alt="Gainz Fitness" src={gainzLogo} style={{ width: '75px', height: '50px'}}/>
                <li>Contact</li>
                <li>Shop</li>
            </ul>
        </div>
    );
}

export default Navbar;