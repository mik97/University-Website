import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "../css/Cards.css";

class ProfilesContent extends React.Component {
  render() {
    return (
      <CardDeck>
        {this.props.titles.map(el => {
          return (
            <Card className="card">
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{el}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button className="blueButton">Read more</Button>
              </Card.Body>
            </Card>
          );
        })}
      </CardDeck>
    );
  }
}

export default ProfilesContent;
