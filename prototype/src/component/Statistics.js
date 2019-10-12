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
            <h2>27</h2>
          </Col>
          <Col>
            <h2>6</h2>
          </Col>
          <Col>
            <h2>80,2%</h2>
          </Col>
          <Col>
            <h2>90,5%</h2>
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
