import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'mdbreact';

import imgTest from './../imgTest.jpg';

class Body extends Component {
  componentWillMount() {
    
  }

  render() {
    return (

      <main className="App-intro">
        <div className="row fadeIn animated">
            <div className="col-md-4">
              <img src={imgTest} alt="imgTest" className="imgTest" />
            </div>
            <div className="col-md-4">
              <img src={imgTest} alt="imgTest" className="imgTest" />
            </div>
            <div className="col-md-4">
              <img src={imgTest} alt="imgTest" className="imgTest" />
            </div>
        </div>
      </main>
  )}
}

export default Body;
