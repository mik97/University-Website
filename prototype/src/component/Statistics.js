import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Statistics.css";

class Statistics extends React.Component {
  render() {
    return (
      <Container className="containerStatistics">
        <Row className="firstTitle">
          <Col>
            <h2>Statistiche UNICAM</h2>
          </Col>
        </Row>
        <Row className="secondValue">
          <Col>
            <span className="value">27</span>
          </Col>
          <Col>
            <span className="value">6</span>
          </Col>
          <Col>
            <span className="value">80,2%</span>
          </Col>
          <Col>
            <span>90,5%</span>
          </Col>
        </Row>
        <Row className="thirdInfo">
          <Col>
            <h4>Corsi di laurea triennali e magistrali</h4>
          </Col>
          <Col>
            <h4>Corsi di laurea magistrale in inglese</h4>
          </Col>
          <Col>
            <h4>Tasso di occupazione a 3 anni dalla laurea</h4>
          </Col>
          <Col>
            <h4>Tasso di occupazione a 5 anni dalla laurea</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Statistics;
