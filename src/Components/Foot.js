import React, { Component } from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class Foot extends Component {
  render() {
    return (
        <main>
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
                        <li className="list-unstyled"><a href="">Link 1</a></li>
                        <li className="list-unstyled"><a href="">Link 2</a></li>
                        <li className="list-unstyled"><a href="">Link 3</a></li>
                        <li className="list-unstyled"><a href="">Link 4</a></li>
                        </ul>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm="12">
                        <h5 className="title App-title"><a href="" className="btn btn-secondary">Sign up</a></h5>

                    </Col>
                  </Row>
              </Container>
              <div className="footer-copyright text-center">
                  <Container fluid>
                      &copy; {(new Date().getFullYear())} Copyright: <a href="https://davidguben.com"> David Guben </a>
                  </Container>
              </div>
          </Footer>
      </main>
  )}
}

export default Foot;
