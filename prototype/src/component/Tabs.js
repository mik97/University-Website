import React from "react";
import { Tab, Row, Nav, Col } from "react-bootstrap";
import "../css/Tabs.css";
import Cards from "./Cards";
class Tabs extends React.Component {
  render() {
    return (
      <Tab.Container id="uncontrolled-tab-example" defaultActiveKey="avvisi">
        <Row className="first-row">
          <Col className="first">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link className="navsLink" eventKey="avvisi">
                  Avvisi
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="second">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link className="navsLink" eventKey="eventi">
                  Eventi
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="second-row">
          <Col>
            <Tab.Content className="content">
              <Tab.Pane eventKey="eventi">
                <Cards type={"Evento"} />
              </Tab.Pane>
              <Tab.Pane eventKey="avvisi">
                <Cards type={"Avviso"} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default Tabs;
