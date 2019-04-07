import React, { Component } from 'react';
import classes from './SudokuRow.css'
import Cell from '../Cell/Cell'

class SudokuRow extends Component{


    
    render () {
      
        return(
            <div className={classes.SudokuRow}>
          { Array.from(Array(9).keys()).map(i => (
              <Cell 
                key={i} 
                row={this.props.row} 
                column={i}
                value={this.props.value[this.props.row][i]}
                changed={(event) => this.props.changed(event, this.props.row, i)}
                clicked={() => this.props.clicked(this.props.row, i)}
                solved={this.props.solved}
                changeColorArr={this.props.changeColorArr}
                turnToRedBorder={this.props.turnToRedBorder}
                isValid={this.props.isValid}
                playGame={this.props.playGame}
                arrayOfReadOnly={this.props.arrayOfReadOnly}
                coordinate={this.props.coordinate}
                arrayOfWriteOnly={this.props.arrayOfWriteOnly}
                />
              )) }
         </div>
        )
    }
} 

export default SudokuRow;