import React from "react";
import { Tab, Row, Nav, Col } from "react-bootstrap";
import "../css/Tabs.css";
import "bootstrap/dist/css/bootstrap.css";

class Tabs extends React.Component {
  render() {
    return (
      <Tab.Container defaultActiveKey="eventi">
        <Row>
          <Col className="column">
            <Nav variant="pills" className="navs">
              <Nav.Item>
                <Nav.Link className="navsLink" eventKey="eventi">
                  Eventi
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="column">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="avvisi" className="navsLink">
                  Avvisi
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="eventi">A</Tab.Pane>
              <Tab.Pane eventKey="avvisi">B</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default Tabs;
