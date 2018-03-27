import React, { Component } from 'react';
import logo from './../logo.svg';

class Header extends Component {
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
