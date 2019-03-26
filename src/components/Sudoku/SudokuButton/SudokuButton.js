import React from 'react';
import classes from './SudokuButton.css'

const sudokuButton = (props) => (
    <button className={classes.Button}>
       {props.value} 
    </button>
)

export default sudokuButton;