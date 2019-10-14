import React from "react";
import newLogo from "../immagini/newLogo2.png";
import "../css/Logo.css";
import Image from "react-bootstrap/Image";
import { Container, Col, Row } from "react-bootstrap";
import Profiles from "./Profiles";

class Logo extends React.Component {
  render() {
    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 20 }}>
        <Row>
          <Col className="logo">
            <a href="http://localhost:3000/">
              <Image className="logo" src={newLogo} alt="newLogo" />
            </a>
          </Col>
          <Col className="paths">
            <Profiles />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Logo;
