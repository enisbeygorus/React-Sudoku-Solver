import React, {Component} from 'react';
import SudokuRow from './SudokuRow/SudokuRow'
import classes from './Sudoku.css'
import SudokuButtonRow from './SudokuButtonRow/SudokuButtonRow';
import { parse_grid, search, performanceTimer } from './SudokuAlgorithm';
import { puzzles } from './RandomSudokuPuzzle'


class PlaySudoku extends Component {
   
  
    
        state={
            puzzle:
        [
            [1, 0, 3, 0, 0, 0, 0, 8, 4],
            [0, 0, 6, 0, 4, 8, 0, 0, 0],
            [0, 4, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 9, 6, 1, 0, 0],
            [0, 9, 0, 8, 0, 1, 0, 4, 0],
            [0, 0, 4, 3, 2, 0, 0, 0, 8],
            [0, 0, 0, 0, 0, 0, 0, 7, 0],
            [0, 0, 0, 1, 5, 0, 4, 0, 0],
            [0, 6, 0, 0, 0, 0, 2, 0, 3],
        ],
             copyPuzzle:[[1,0,3,0,0,0,0,8,4],
                [0,0,6,0,4,8,0,0,0],
                [0,4,0,0,0,0,0,0,0],
                [2,0,0,0,9,6,1,0,0],
                [0,9,0,8,0,1,0,4,0],
                [0,0,4,3,2,0,0,0,8],
                [0,0,0,0,0,0,0,7,0],
                [0,0,0,1,5,0,4,0,0],
                [0,6,0,0,0,0,2,0,3]],    
            
            loading: false,
            changeColorArr: [],
            performanceTime: 0,
            isValid: true,
            tempValue:0,
            coordinate: [null, null],
            duplicateError: false,
            displayError:[],
            displayRed:[],
            solved: false,
            turnToRedBorder: [],
            inValidPuzzle: false,
            playGame: true,
            arrayOfReadOnly: []
            
    }

    componentDidMount() {
        const tempPuzzle = this.stringToArray();
        const tempReadOnlyArr = this.takeIndexToReadOnly(tempPuzzle);
        
        if(this.state.arrayOfReadOnly !== tempReadOnlyArr){
            this.setState({arrayOfReadOnly: tempReadOnlyArr})
        }

        if(this.state.puzzle !== tempPuzzle && this.state.copyPuzzle !== tempPuzzle) {
            this.setState({puzzle: tempPuzzle, copyPuzzle: tempPuzzle })
        }
    }

    

   
    stringToArray = () => {
        const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)]
        
      
        let tempStr;
        let tempArr = [];
        let tempArr2 = [];
        for(let i = 0; i < 81; i+= 9) {
            for(let j = i; j < i + 9; j++ ){
                tempStr = randomPuzzle.substr(j, 1)
                if(tempStr === '.'){
                    tempStr = 0
                }
                tempArr.push(parseInt(tempStr))
            }
            tempArr2.push(tempArr);
            tempArr = [];       
        } 
      
        return tempArr2

    }

    takeIndexToReadOnly = (array) => {
        let tempArr = []
        
        for(let i = 0; i < 9 ; i++) {
            for(let j = 0; j < 9; j++){
                if(array[i][j] !== 0){
                    tempArr.push(i,j)
                }
            }
        }

        return tempArr
    }

    checkStateForDuplicate = () => {
        
        const coppyPuzzle = this.arrayClone(this.state.puzzle)

        let emptyArr = [];
        let displayError = [];
        let isValid = true;
        let inValidArr = [];



        let tempArr = [];

        for (let i = 0; i < 9; i++) {
           for (let j = 0; j < 8; j++) {
               for(let k = j + 1; k < 9; k++) {
                    if(coppyPuzzle[i][j] === coppyPuzzle[i][k] && coppyPuzzle[i][j] !== 0){
                        if(!displayError.includes('Row'))  displayError.push('Row') 
                        isValid = false
                       
                        inValidArr.push(i,j,i,k)
                        
                    }
               }
           }
        }

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 8; j++) {
                for(let k = j + 1; k < 9; k++) {
                     if(coppyPuzzle[j][i] === coppyPuzzle[k][i] && coppyPuzzle[j][i] !== 0) {
                        if(!displayError.includes('Column'))  displayError.push('Column')
                         isValid = false
                         inValidArr.push(j,i,k,i)
                         
                     }
                }
            }
         }

       
           for (let i = 0; i < 9; i += 3) {
               emptyArr = []
               tempArr = []
               for( let j = 0; j < 9; j += 3) {
                  for( let t = i; t < i + 3; t++) {
                      for(let k = j ; k < j + 3; k++) {     
                          emptyArr.push(coppyPuzzle[t][k])
                          tempArr.push(t,k)
                      }
                      
                  }
                  for(let n = 0; n < 8; n++){
                      for(let m = n + 1; m < 9; m++) {
                          if(emptyArr[n] !== 0 && emptyArr[n] === emptyArr[m]) {
                            if(!displayError.includes('Square'))  displayError.push('Square')
                             isValid = false
                             
                             inValidArr.push(tempArr[(2*m)], tempArr[(2*m+1)],tempArr[(2*n)], tempArr[(2*n+1)])
                            
                          }
                      }
                  }
                  emptyArr = []
                  tempArr = []
               }
           }   
          
             this.setState({isValid: isValid, displayError: displayError, turnToRedBorder: inValidArr})   
    }

   

    checkValidity(value) {
        let isValid = true;
        if(value <= 9 && value >=0) {
            this.setState({isValid: true})
            return isValid
        } else {
            console.log('input is not valid')
            this.setState({isValid: false})
            return !isValid
        }
    }



    
    //State the row and colum for buttonInputHandler to handle onclick to write button numbers
    stateRowColumn = (row, column) => {
        console.log(row,column)
        const arr = [row, column]
        this.setState({coordinate: arr})
    }
    
  
    buttonInputHandler = (clickedValue) => {
        let row = this.state.coordinate[0]
        let column = this.state.coordinate[1]
        let val = clickedValue

        this.checkValidity(val);
   
        this.setState(prevState => ({
            ...prevState,
            puzzle: prevState.puzzle.map((pz,index) => {      
                 if(index === row) {               
                 pz[column] = val         
                 return pz    
                }
                return pz;
            })
        }),
        this.checkStateForDuplicate
        )
        
    }

    
   
    inputHandler = (event, row, column) => {
        const val = isNaN(parseInt(event.target.value)) === true ? 0 : parseInt(event.target.value)
    
        this.checkValidity(val)
    
        this.setState(prevState => ({
            ...prevState,
            puzzle: prevState.puzzle.map((pz,index) => {      
                if(index === row) {               
                pz[column] = val         
                return pz    
                }
                return pz;
            })
        }),
        this.checkStateForDuplicate) 
}



    arrayClone = ( arr ) => {

        var i, copy;

        if( Array.isArray( arr ) ) {
            copy = arr.slice( 0 );
            for( i = 0; i < copy.length; i++ ) {
                copy[ i ] = this.arrayClone( copy[ i ] );
            }
            return copy;
        } else {
            return arr;
        }
}

  
     takeIndexToMakeGreen = (puzzle) => {
         
        const dataChangeColor = [];
        const copyPuzzle = this.arrayClone(this.state.copyPuzzle)

        console.log(puzzle)
         console.log(copyPuzzle)

        for(let i = 0 ; i < copyPuzzle.length; i++) {
            for(let j = 0; j < puzzle.length; j++) {
                if(puzzle[i][j] !== copyPuzzle[i][j]) {
                    dataChangeColor.push(i,j)
                }
            }
        }
        console.log(dataChangeColor)
        return dataChangeColor
  }
  
    merged = (arr) => {
        let merged = [].concat.apply([], arr);
            return merged
        }

    transformObjecToArray = (solvedPuzzle) => {
            let counter = 0;
            let arr = [];
            let arr2= [];
            let solved = true;
            console.log(solvedPuzzle)
           try {
                for(let i in solvedPuzzle){
                    if(counter === 9) {
                        counter = 0;
                        arr2.push(arr)
                        arr = [];
                    }
                    arr.push(parseInt(solvedPuzzle[i]))
                    counter++
                }
                arr2.push(arr)
                arr = this.takeIndexToMakeGreen(arr2);
                this.setState({puzzle: arr2, changeColorArr: arr, solved: solved, inValidPuzzle: false})
                return arr2;
        } 
             catch (err) {
                console.log('there is error')
                this.setState({inValidPuzzle: true})
            }
}



    solve = () => {
        const performanceTime = performanceTimer();
        this.setState({ performanceTime: performanceTime })
        const transformedPuzzle = this.merged(this.arrayClone(this.state.puzzle)).toString()
        const solvedPuzzle = search(parse_grid(transformedPuzzle))
        this.setState()
        this.transformObjecToArray(solvedPuzzle)
 }


    render () {
       
        this.stringToArray(puzzles[0]);
        
        
        let errorParagraf = null;
        
        let inValidParagraf = <p style={{margin: '10px 20%'}}></p>;

        let solvedParagraf = null

        if(this.state.solved) {
            solvedParagraf = <p style={{margin: '0px 52px', whiteSpace: "nowrap"}}>Solved in <strong>{this.state.performanceTime} millisecond</strong></p>
        }

        if(this.state.inValidPuzzle){
            inValidParagraf = <p style={{margin: '0px 20% 10px 20%' , whiteSpace: "nowrap"}}><strong>Puzzle is not valid, Check inputs!</strong></p>
        } 

        if(this.state.displayError.length === 1) {
            errorParagraf = <p style={{whiteSpace: "nowrap"}}><strong>ERROR!: Duplicate in same {this.state.displayError[0]}</strong></p>
        }

        if(this.state.displayError.length === 2) {
            errorParagraf = <p style={{whiteSpace: "nowrap"}}>
                            <strong>
                            ERROR!: Duplicate in same {this.state.displayError[0]} and {this.state.displayError[1]}
                                </strong>
                            </p>
        }

        if(this.state.displayError.length === 3) {
            errorParagraf = <p style={{whiteSpace: "nowrap"}}>
                            <strong>
                            ERROR!: Duplicate in same {this.state.displayError[0]} and {this.state.displayError[1]} and {this.state.displayError[2]}
                                </strong>
                            </p>
        }
        
        
      
        let allCell = Array.from(Array(9).keys()).map(i => {
            return <SudokuRow 
                        clicked={this.stateRowColumn}
                        puzzle={this.state.puzzle}
                        key={i}
                        row={i}
                        value={this.state.puzzle}
                        changed={this.inputHandler}
                        solved={this.state.solved}
                        changeColorArr={this.state.changeColorArr}
                        turnToRedBorder={this.state.turnToRedBorder}
                        isValid={this.state.isValid}
                        playGame={this.state.playGame}
                        arrayOfReadOnly={this.state.arrayOfReadOnly}    />
          })

          //let buttonSwitch =  <button className={classes.SudokuSolveButton} onClick={() => this.solve()} >Solve the Puzzle</button>

        //   if(!this.state.isValid) {
        //       buttonSwitch = <button className={classes.SudokuSolveButtonDisable}  >Puzzle is not Valid !</button>
        //   }

        return (
           
            <div className={classes.Sudoku}>
               {inValidParagraf}
                <div>
                {allCell}
                </div>
                <div><SudokuButtonRow tempValue={this.state.tempValue} clicked={this.buttonInputHandler}/></div>
                {errorParagraf}
                {solvedParagraf}
                <p>test paragraf</p>
           </div>
          
        )
    }
}


export default PlaySudoku;