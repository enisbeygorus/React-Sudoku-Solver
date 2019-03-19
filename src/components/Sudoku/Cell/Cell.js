import React from 'react';

import classes from './Cell.css'


const cell = (props) => {

    let emptyString = '';
    
    if(props.value !== 0) {
        emptyString = props.value
    } 
    return(
        <input
            onClick={() => console.log(props)}
            onChange={props.changed}
            className={classes.Input}
            value={emptyString}
            column={props.column}
            row={props.row} />
        
    )
   
}

export default cell;