import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "../css/Cards.css";

class Cards extends React.Component {
  render() {
    return (
      <CardDeck>
        <Card className="card">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Corsi di laurea triennale</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Button className="blueButton">Read more</Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Corsi di laurea magistrale</Card.Title>
            <Card.Text>
              Viverra ipsum nunc aliquet bibendum enim facilisis. Adipiscing
              vitae proin sagittis nisl rhoncus mattis rhoncus. Duis ut diam
              quam nulla porttitor. Turpis in eu mi bibendum neque egestas
              congue quisque.
            </Card.Text>
            <Button className="blueButton">Read more</Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Immatricolazioni</Card.Title>
            <Card.Text>
              Turpis egestas integer eget aliquet nibh praesent tristique magna
              sit. Urna neque viverra justo nec ultrices dui. Neque laoreet
              suspendisse interdum consectetur.
            </Card.Text>
            <Button className="blueButton">Read more</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  }
}

export default Cards;
