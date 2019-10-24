import React from "react";
import { Tab, Row, Nav, Col, Carousel } from "react-bootstrap";
import "../css/Tabs.css";
import Cards from "./Cards";
class Tabs extends React.Component {
  render() {
    return (
      <Tab.Container id="uncontrolled-tab-example" defaultActiveKey="avvisi">
        <Row className="first-row">
          <Col className="buttons">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link className="navsLink" eventKey="avvisi">
                  Avvisi
                </Nav.Link>
              </Nav.Item>
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
            <Carousel
              className="carouselTab"
              controls={false}
              nextIcon
              prevIcon
              interval={null}
            >
              <Carousel.Item>
                <Tab.Content className="content">
                  <Tab.Pane eventKey="eventi">
                    <Cards type={"Evento"} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="avvisi">
                    <Cards type={"Avviso"} />
                  </Tab.Pane>
                </Tab.Content>
              </Carousel.Item>
              <Carousel.Item>
                <Tab.Content className="content">
                  <Tab.Pane eventKey="eventi">
                    <Cards type={"Evento"} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="avvisi">
                    <Cards type={"Avviso"} />
                  </Tab.Pane>
                </Tab.Content>
              </Carousel.Item>
              <Carousel.Item>
                <Tab.Content className="content">
                  <Tab.Pane eventKey="eventi">
                    <Cards type={"Evento"} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="avvisi">
                    <Cards type={"Avviso"} />
                  </Tab.Pane>
                </Tab.Content>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default Tabs;
