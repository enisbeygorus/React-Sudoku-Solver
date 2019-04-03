import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact active>Play Sudoku</NavigationItem>
        <NavigationItem link="/solve">Sudoku Solver</NavigationItem>
        
    </ul>
);

export default navigationItems;