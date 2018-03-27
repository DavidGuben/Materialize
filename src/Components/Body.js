import React, { Component } from 'react';
import { Button } from 'mdbreact';
import { Card, CardImage, CardBody, CardTitle, CardText } from 'mdbreact';

class Body extends Component {
  render() {
    return (
      <main className="App-intro whiteText">
        <div className="row topMargin">
            <div className="col-md-4">
              <Card >
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody className="cardBG">
                <CardTitle>Card title</CardTitle>
              <CardText><p className="whiteText">Some quick example text to build on the card title and make up the bulk of the card's content.</p></CardText>
            <Button color="info">Button</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
              <CardBody className="cardBG">
                <CardTitle>Card title</CardTitle>
              <CardText><p className="whiteText">Some quick example text to build on the card title and make up the bulk of the card's content.</p></CardText>
                <Button color="info">Button</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody className="cardBG">
                <CardTitle>Card title</CardTitle>
              <CardText><p className="whiteText">Some quick example text to build on the card title and make up the bulk of the card's content.</p></CardText>
                <Button color="info">Button</Button>
                </CardBody>
              </Card>
            </div>
        </div>
      </main>
  )}
}

export default Body;
