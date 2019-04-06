import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom' 

import Layout from './components/Layout/Layout';
import Sudoku from './components/Sudoku/Sudoku';
import PlaySudoku from './components/Sudoku/PlaySudoku';

class App extends Component {
  render() {

    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={PlaySudoku} />
            <Route path="/solve" component={Sudoku} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
