import React, { Component } from 'react';

import classes from './Cell.css'


class Cell extends Component {

    

   
    render() {
       
       let cell = null
       let emptyString = '';

      

       cell = <input
            className={classes.DifferentInputFont}
            onClick={this.props.clicked}
            onChange={this.props.changed}
            value={emptyString}
            column={this.props.column}
            row={this.props.row}

            />

            if(  this.props.row === 2  || this.props.row === 5){
                cell =  <input
                       className={classes.InputBottomBorder}
                       onClick={this.props.clicked}
                       onChange={this.props.changed}
                       value={emptyString}
                       column={this.props.column}
                       row={this.props.row} /> 
            }
    
        if(this.props.value !== 0) {
        emptyString = this.props.value

           cell = <input
                className={classes.Input}
                onClick={this.props.clicked}
                onChange={this.props.changed}
                value={emptyString}
                column={this.props.column}
                row={this.props.row}

             />


             if(  this.props.row === 2  || this.props.row === 5){
                cell =  <input
                       className={classes.InputBottomBorder}
                       onClick={this.props.clicked}
                       onChange={this.props.changed}
                       value={emptyString}
                       column={this.props.column}
                       row={this.props.row} /> 
            }

            

          //console.log(this.props.changeColorArr,'****', this.props.row)
          if(!this.props.isValid){
              for(let i = 0; i< this.props.turnToRedBorder.length; i+=2){
                if(this.props.turnToRedBorder[i] === this.props.row && this.props.turnToRedBorder[i+1] === this.props.column){
                    cell = <input
                        className={classes.InputInValid}
                        onClick={this.props.clicked}
                        onChange={this.props.changed}
                        value={emptyString}
                        column={this.props.column}
                        row={this.props.row} />

                        if( (this.props.row === 2  || this.props.row === 5) && this.props.turnToRedBorder[i] === this.props.row && this.props.turnToRedBorder[i+1] === this.props.column ) {
                            cell = <input
                                className={classes.InputInValidBottom}
                                onClick={this.props.clicked}
                                onChange={this.props.changed}
                                value={emptyString}
                                column={this.props.column}
                                row={this.props.row} />
                        }
                }

                
              }
          }

         if(this.props.solved) {
             for(let i = 0; i < this.props.changeColorArr.length; i+=2 ){
                 //console.log(this.props.changeColorArr[i], '*****', this.props.changeColorArr[i+1])
                if(this.props.changeColorArr[i] === this.props.row && this.props.changeColorArr[i+1] === this.props.column)
                
                    cell = <input
                        className={classes.InputSolved}
                        onClick={this.props.clicked}
                        onChange={this.props.changed}
                        value={emptyString}
                        column={this.props.column}
                        row={this.props.row} />

                        

                        if(  (this.props.row === 2  || this.props.row === 5) && (this.props.changeColorArr[i] === this.props.row && this.props.changeColorArr[i+1] === this.props.column)){
                            cell =  <input
                                   className={classes.InputSolvedBorder}
                                   onClick={this.props.clicked}
                                   onChange={this.props.changed}
                                   value={emptyString}
                                   column={this.props.column}
                                   row={this.props.row} /> 
                        } 
                        
                       
                 
             }
           
            }
    } 

    if(this.props.playGame){

        cell = <input
            className={classes.DifferentInputFont}
            onClick={this.props.clicked}
            onChange={this.props.changed}
            value={emptyString}
            column={this.props.column}
            row={this.props.row}

            />

            if(  this.props.row === 2  || this.props.row === 5){
                cell =  <input
                       className={classes.DifferentInputFontBottom}
                       onClick={this.props.clicked}
                       onChange={this.props.changed}
                       value={emptyString}
                       column={this.props.column}
                       row={this.props.row} /> 
            }



        for(let i = 0; i< this.props.arrayOfReadOnly.length; i+=2){
            if(this.props.arrayOfReadOnly[i] === this.props.row && this.props.arrayOfReadOnly[i+1] === this.props.column){
                cell = <input
                    readOnly={true}
                    className={classes.Input}
                    onClick={this.props.clicked}
                    onChange={this.props.changed}
                    value={emptyString}
                    column={this.props.column}
                    row={this.props.row} />
            }
            if((this.props.row === 2  || this.props.row === 5) && (this.props.arrayOfReadOnly[i] === this.props.row && this.props.arrayOfReadOnly[i+1] === this.props.column)){
                cell = <input
                    readOnly={true}
                    className={classes.InputBottomBorder}
                    onClick={this.props.clicked}
                    onChange={this.props.changed}
                    value={emptyString}
                    column={this.props.column}
                    row={this.props.row} />
              }
            }
            

              if(!this.props.isValid){
                for(let i = 0; i< this.props.arrayOfReadOnly.length; i+=2){
                    for(let j = 0; j < this.props.turnToRedBorder.length; j+=2){

                        if(this.props.arrayOfReadOnly[i] === this.props.row && this.props.arrayOfReadOnly[i+1] === this.props.column &&
                        this.props.turnToRedBorder[j] === this.props.row && this.props.turnToRedBorder[j+1] === this.props.column ){
                  
                            cell = <input  
                                        readOnly={true}
                                        className={classes.InputInValid}
                                        onClick={this.props.clicked}
                                        onChange={this.props.changed}
                                        value={emptyString}
                                        column={this.props.column}
                                        row={this.props.row} />
 }  
                      
                            

               if((this.props.row === 2  || this.props.row === 5) && this.props.arrayOfReadOnly[i] === this.props.row && this.props.arrayOfReadOnly[i+1] === this.props.column &&
               this.props.turnToRedBorder[j] === this.props.row && this.props.turnToRedBorder[j+1] === this.props.column){
                                cell = <input  
                                        readOnly={true}
                                        className={classes.InputInValidBottom}
                                        onClick={this.props.clicked}
                                        onChange={this.props.changed}
                                        value={emptyString}
                                        column={this.props.column}
                                        row={this.props.row} />
               }
  
  }
}
                for(let i = 0; i< this.props.arrayOfWriteOnly.length; i+=2){
                    for(let j = 0; j < this.props.turnToRedBorder.length; j+=2){
                        if(this.props.arrayOfWriteOnly[i] === this.props.row && this.props.arrayOfWriteOnly[i+1] === this.props.column &&
                            this.props.turnToRedBorder[j] === this.props.row && this.props.turnToRedBorder[j+1] === this.props.column ){
                      
                                cell = <input  
                                            className={classes.InputInValid}
                                            onClick={this.props.clicked}
                                            onChange={this.props.changed}
                                            value={emptyString}
                                            column={this.props.column}
                                            row={this.props.row} />
     }  
                    }
                }
  
            }

          

    }

    
    return( 
        cell || <input
        className={classes.DifferentInputFont}
        onClick={this.props.clicked}
        onChange={this.props.changed}
        value={emptyString}
        column={this.props.column}
        row={this.props.row} />
     )
    }
}

export default Cell;