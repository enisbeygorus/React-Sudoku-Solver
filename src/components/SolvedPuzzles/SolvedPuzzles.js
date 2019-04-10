import React, { Component } from 'react';
import SolvedPuzzle from './SolvedPuzzle/SolvedPuzzle';

import axios from '../../axios-solved'

class SolvedPuzzles extends Component {

    state = {
        fetchedPuzzles: []
    }

    componentDidMount() {
        axios.get('/solved.json')
        .then(res => {
                    const fetchedPuzzles = [];
            for(let key in res.data){
                fetchedPuzzles.push({
                    ...res.data[key],
                    id: key
                })
            }
            console.log(fetchedPuzzles)
            this.setState({ fetchedPuzzles: fetchedPuzzles})
                
            
        })
        .catch(err => {
            console.log(err)
            //this.setState({loading:false})
        })
    }

    merged = (arr) => {
        let merged = [].concat.apply([], arr);
            return merged
        }

    render () {

        

        const fetchedPuzzlesOutput = this.state.fetchedPuzzles.map(puzzle => {
            return <SolvedPuzzle 
                    key={puzzle.id}
                    puzzle={this.merged(puzzle.puzzle).join('')}
                    solution={this.merged(puzzle.solution).join('')}
                    />
            
        })

        return (
            <div>
                {fetchedPuzzlesOutput}
            </div>
        )
    }
};

export default SolvedPuzzles