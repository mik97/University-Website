import React from "react";
import "../css/Header.css";
import { Nav, Image } from "react-bootstrap";
import facebook from "../immagini/facebook.png";
import instagram from "../immagini/instagram.png";
import twitter from "../immagini/twitter.png";
import youtube from "../immagini/youtube.png";
import linkedin from "../immagini/linkedin.png";

class Header extends React.Component {
  render() {
    return (
      <div className="divHeader">
        <Nav className="navHeader">
          <Nav.Item>
            <Nav.Link className="navslinkheader">Orari</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/Servizi%20e%20Opportunità/Servizi%20Online/Rubrica"
              className="navslinkheader"
              eventKey="link-1"
            >
              Rubrica
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/Servizi%20e%20Opportunità/Servizi%20Online/Help%20Desk"
              className="navslinkheader"
              eventKey="link-2"
            >
              Help Desk
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/Servizi%20e%20Opportunit%C3%A0/Servizi%20Online/Portale%20Didattica"
              className="navslinkheader"
              eventKey="link-3"
            >
              Portale didattica
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/Ateneo/Strutture"
              className="navslinkheader"
              eventKey="link-4"
            >
              Strutture
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="social">
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
              width="30"
              height="30"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
