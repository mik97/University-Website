import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import "../css/ProfilesContent.css";

class ProfilesContent extends React.Component {
  render() {
    return (
      <CardDeck>
        {this.props.titles.map((el, index) => {
          return (
            <Card>
              <a
                className="linkProfilesContent"
                href={this.props.name + this.props.links[index]}
              >
                <Card.Body>
                  <Card.Title>{el}</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </Card.Body>
              </a>
            </Card>
          );
        })}
      </CardDeck>
    );
  }
}

export default ProfilesContent;
