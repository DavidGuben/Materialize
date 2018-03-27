import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'mdbreact';
import logo from './../logo.svg';

class Header extends Component {
  constructor(props) {
    super(props);

    }
  render() {
    return (
      <header className="App-header">
        <div className="animated jello infinite">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
  )}
}

export default Header;
