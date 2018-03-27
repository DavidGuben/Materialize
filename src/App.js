import React, { Component } from 'react';

import Navi from './Components/Navi';
import Header from './Components/Header';
import Main from './Components/Main';
import Foot from './Components/Foot';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi />
        <Header />
        <Main />
        <Foot />
      </div>
    );
  }
}

export default App;
