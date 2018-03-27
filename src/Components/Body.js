import React, { Component } from 'react';
import { Button } from 'mdbreact';
import { Card, CardImage, CardBody, CardTitle, CardText } from 'mdbreact';

class Body extends Component {
  render() {
    return (
      <main className="App-intro">
        <div className="row topMargin">
            <div className="col-md-4">
              <Card>
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button href="#">Button</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button href="#">Button</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button href="#">Button</Button>
                </CardBody>
              </Card>
            </div>
        </div>
      </main>
  )}
}

export default Body;
