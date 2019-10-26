import React from "react";
import newLogo from "../immagini/newLogo2.png";
import "../css/Logo.css";
import Image from "react-bootstrap/Image";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Profiles from "./Profiles";

class Logo extends React.Component {
  render() {
    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 20 }}>
        <div className="logoAndSections">
          <div className="logo">
            <Link to="/">
              <Image className="logo" src={newLogo} alt="newLogo" />
            </Link>
          </div>
          <div className="paths">
            <Profiles />
          </div>
        </div>
      </Container>
    );
  }
}
export default Logo;
