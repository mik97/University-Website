import React from "react";
import { Container, Card, CardGroup } from "react-bootstrap";
import linkUtile1 from "../immagini/linkUtile1.jpg";
import linkUtile2 from "../immagini/linkUtile2.jpg";
import linkUtile3 from "../immagini/linkUtile3.jpg";
import linkUtile4 from "../immagini/linkUtile4.jpg";
import linkUtile5 from "../immagini/linkUtile5.jpg";
import linkUtile6 from "../immagini/linkUtile6.png";

import "../css/LinkUtili.css";

class LinkUtili extends React.Component {
  render() {
    return (
      <Container>
        <h2 className="title">Link utili</h2>
        <CardGroup>
          <Card className="cardLinkUtili">
            <Card.Img src={linkUtile1} alt="Card image" />
            <Card.Title className="linkName">Link 1</Card.Title>
          </Card>
          <Card className="cardLinkUtili">
            <Card.Img src={linkUtile2} alt="Card image" />
            <Card.Title className="linkName">Link2</Card.Title>
          </Card>
          <Card className="cardLinkUtili">
            <Card.Img src={linkUtile3} alt="Card image" />
            <Card.Title className="linkName">Link 3</Card.Title>
          </Card>
          <Card className="cardLinkUtili">
            <Card.Img src={linkUtile4} alt="Card image" />
            <Card.Title className="linkName">Link 4</Card.Title>
          </Card>
          <Card className="cardLinkUtili">
            <Card.Img src={linkUtile5} alt="Card image" />
            <Card.Title className="linkName">Link 5</Card.Title>
          </Card>
          <Card className="cardLinkUtili">
            <Card.Img src={linkUtile6} alt="Card image" />
            <Card.Title className="linkName">Link 6</Card.Title>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}
export default LinkUtili;
