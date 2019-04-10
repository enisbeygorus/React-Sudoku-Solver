import React from 'react';

import classes from './SolvedPuzzle.css'

const solvedPuzzle = (props) => {
    return (
        <div className={classes.SolvedPuzzle}>
            <p><strong>Puzzle: </strong> {props.puzzle} </p>
            <p><strong>Solution: </strong> {props.solution} </p>
        </div>
    )
}

export default solvedPuzzle;