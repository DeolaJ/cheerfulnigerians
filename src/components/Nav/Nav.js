import React from 'react';
import classes from './Nav.css';
import Navitems from './Navitems';

const Nav = props => {
    return <nav className={classes.nav}>
            <Navitems />
        </nav>
}

export default Nav;