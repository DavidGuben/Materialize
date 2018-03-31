import React, { Component } from 'react';

import MyListGroup from './ListGroup';

import './../App.css';

class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-4 topMargin">
            <MyListGroup />
          </div>
          <div className="col-md-4 topMargin">
            <MyListGroup />
          </div>
          <div className="col-md-4 topMargin">
            <MyListGroup />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
