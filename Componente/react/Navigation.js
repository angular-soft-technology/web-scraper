import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="main-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about" activeClassName="selected-page">About</NavLink>
            <NavLink to="/contact" activeClassName="selected-page">Contact</NavLink>
        </div>
    )
}

export default Navigation;