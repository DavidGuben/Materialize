import React, { Component } from 'react';
import { Button, Col, Container, Row, Footer } from 'mdbreact';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark indigo">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="basicExampleNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Features">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                      <Dropdown isOpen = { this.state.dropdownOpen } toggle = { this.toggle } size="sm">
                        <DropdownToggle caret color="primary">
                          dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another Action</DropdownItem>
                          <DropdownItem href="#">Something else here</DropdownItem>
                          <DropdownItem href="#">Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                </ul>
                <form class="form-inline">
                    <div class="md-form mt-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </form>
            </div>
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-intro">
          <Button color="primary">In Progress</Button>
        </main>
        <Footer color="blue" className="font-small pt-4 mt-4">
                <Container className="text-left">
                    <Row>
                    <Col sm="6">
                        <h5 className="title">Footer Content</h5>
                      <p>Lorem ipsum description.</p>
                    </Col>
                    <Col sm="6">
                        <h5 className="title">Links</h5>
                        <ul>
                        <li className="list-unstyled"><a href="#!">Link 1</a></li>
                        <li className="list-unstyled"><a href="#!">Link 2</a></li>
                        <li className="list-unstyled"><a href="#!">Link 3</a></li>
                        <li className="list-unstyled"><a href="#!">Link 4</a></li>
                        </ul>
                    </Col>
                    </Row>
                    <hr />
                    <Row>
                    <Col sm="12">
                        <h5 className="title App-title"><a href="#" className="btn btn-secondary">Sign up</a></h5>

                    </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://davidguben.com"> David Guben </a>
                    </Container>
                </div>
            </Footer>
      </div>
    );
  }
}

export default App;
