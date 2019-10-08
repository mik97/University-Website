import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "../css/Cards.css";

interface CardsProps {
  type: "Evento" | "Avviso";
}

class Cards extends React.Component<CardsProps> {
  render() {
    return (
      <CardDeck>
        <Card className="card">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{this.props.type} 1</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Button className="blueButton">Read more</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{this.props.type} 2</Card.Title>
            <Card.Text>
              Viverra ipsum nunc aliquet bibendum enim facilisis. Adipiscing
              vitae proin sagittis nisl rhoncus mattis rhoncus. Duis ut diam
              quam nulla porttitor. Turpis in eu mi bibendum neque egestas
              congue quisque.
            </Card.Text>
            <Button className="blueButton">Read more</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 2 days ago</small>
          </Card.Footer>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{this.props.type} 3</Card.Title>
            <Card.Text>
              Turpis egestas integer eget aliquet nibh praesent tristique magna
              sit. Urna neque viverra justo nec ultrices dui. Neque laoreet
              suspendisse interdum consectetur.
            </Card.Text>
            <Button className="blueButton">Read more</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 5 days ago</small>
          </Card.Footer>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{this.props.type} 4</Card.Title>
            <Card.Text>
              Feugiat vivamus at augue eget arcu dictum. Ultrices gravida dictum
              fusce ut. Pulvinar sapien et ligula ullamcorper malesuada proin
              libero nunc.
            </Card.Text>
            <Button className="blueButton">Read more</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 7 days ago</small>
          </Card.Footer>
        </Card>
        {/* <Card className="card">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{this.props.type} 5</Card.Title>
            <Card.Text>
              A diam maecenas sed enim ut sem viverra aliquet. Interdum varius
              sit amet mattis vulputate enim. Id volutpat lacus laoreet non
              curabitur gravida arcu. Odio pellentesque diam volutpat commodo
              sed.
            </Card.Text>
            <Button className="blueButton">Read more</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 week ago</small>
          </Card.Footer>
        </Card> */}
      </CardDeck>
    );
  }
}

export default Cards;
