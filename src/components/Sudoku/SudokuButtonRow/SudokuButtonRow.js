import React from 'react';
import SudokuButton from '../SudokuButton/SudokuButton'
import classes from './SudokuButtonRow.css'

const sudokuButtonRow = props => {
    return <div className={classes.SudokuButtonRow}>
                {Array.from(Array(9).keys()).map(i => <SudokuButton value={i + 1} key={i}/>)}
            </div>
}

export default sudokuButtonRow