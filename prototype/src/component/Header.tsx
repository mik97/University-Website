import React from "react";
import "../css/Header.css";
import { Container, Nav, Row, Col, Image } from "react-bootstrap";
import facebook from "../immagini/facebook.png";
import instagram from "../immagini/instagram.png";
import twitter from "../immagini/twitter.png";
import youtube from "../immagini/youtube.png";
import linkedin from "../immagini/linkedin.png";

class Header extends React.Component {
  render() {
    return (
      <Container className="containerHeader">
        <Row>
          <Col>
            <Nav>
              <Nav.Item>
                <Nav.Link className="navslinkheader" href="/home">
                  Orari
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navslinkheader" eventKey="link-1">
                  Rubrica
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navslinkheader" eventKey="link-2">
                  Help Desk
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navslinkheader" eventKey="link-3">
                  Portale didattica
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navslinkheader" eventKey="link-4">
                  Strutture
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="social">
            Seguici su
            <a href="https://www.facebook.com/universitacamerino">
              <Image
                className="socials"
                src={facebook}
                alt="facebook"
                width="30"
                height="30"
              />
            </a>
            <a href="https://instagram.com/universitacamerino/">
              <Image
                className="socials"
                src={instagram}
                alt="instagram"
                width="30"
                height="30"
              />
            </a>
            <a href="http://www.twitter.com/UniCamerino">
              <Image
                className="socials"
                src={twitter}
                alt="twitter"
                width="30"
                height="30"
              />
            </a>
            <a href="http://www.youtube.com/videounicam">
              <Image
                className="socials"
                src={youtube}
                alt="youtube"
                width="30"
                height="30"
              />
            </a>
            <a href="https://www.linkedin.com/school/university-of-camerino/">
              <Image
                className="socials"
                src={linkedin}
                alt="linkedin"
                width="35"
                height="35"
              />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
