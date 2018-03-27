import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'mdbreact';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';



import Navi from './Components/Navi';
import Header from './Components/Header';
import Body from './Components/Body';
import Foot from './Components/Foot';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div className="App">
        <Navi />
        <Header />
        <Body />
        <Foot />
      </div>
    );
  }
}

export default App;
