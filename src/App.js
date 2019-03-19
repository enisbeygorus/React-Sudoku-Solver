import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Sudoku from './components/Sudoku/Sudoku';

class App extends Component {
  render() {

    return (
      <div>
        <Layout>
          <Sudoku />
        </Layout>
      </div>
    );
  }
}

export default App;
