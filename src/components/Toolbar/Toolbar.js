import React from 'react';

import classes from './Toolbar.css';

import NavigationItems from '../Navigation/NavigationItems/NavigationItems'


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <nav>
        <NavigationItems  />
        </nav>
    </header>
);

export default toolbar