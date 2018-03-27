import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navi extends Component {
  render() {
    return(
      <nav class="navbar navbar-expand-lg navbar-dark blue">
          <a class="navbar-brand" href="">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="basicExampleNav">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      <Link class="nav-link" to="/">Home
                          <span class="sr-only">(current)</span>
                      </Link>
                  </li>
                  <li class="nav-item">
                      <Link class="nav-link" to="/Features">Features</Link>
                  </li>
                  <li class="nav-item">
                      <Link class="nav-link" to="/Pricing">Pricing</Link>
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
