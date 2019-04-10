import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact active>Play Sudoku</NavigationItem>
        <NavigationItem link="/solve">Sudoku Solver</NavigationItem>
        <NavigationItem link="/solved-puzzle">Solved Puzzles</NavigationItem>    
    </ul>
);

export default navigationItems;