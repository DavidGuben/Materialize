import React, { Component } from 'react';
import { Button, Col, Container, Row, Footer } from 'mdbreact';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class Navi extends Component {
  render() {
    return(
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
                  </li>
              </ul>
              <form class="form-inline">
                  <div class="md-form mt-0">
                      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
              </form>
          </div>
      </nav>
    )}
  }

export default Navi;
