import React from "react";
import { Row, Col, Accordion, Card, Button, Nav, Tab } from "react-bootstrap";
import "../css/Content.css";
import Sections from "./Sections";
import NoProfile from "../fileSystem/NoProfile.json";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activate: false };
  }

  click() {}

  getElements() {
    switch (this.props.root) {
      case "Ateneo":
        return NoProfile.at.map((el, index) => {
          return (
            <Row>
              <Col>
                <Card>
                  <Card.Header>
                    <Nav variant="pills">
                      <Nav.Item>
                        <Accordion.Toggle className="navsLink" eventKey={el}>
                          {el}
                        </Accordion.Toggle>
                      </Nav.Item>
                    </Nav>
                  </Card.Header>
                </Card>
              </Col>
              <Col>
                {index === 0 ? (
                  <Tab.Content className="content">
                    <Tab.Pane eventKey="Storia">
                      <h3>Storia</h3>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Nisl pretium fusce id velit.
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Il sistema universitario">
                      <h3>Il sistema universitario</h3>
                      <div>
                        Egestas egestas fringilla phasellus faucibus scelerisque
                        eleifend. Faucibus scelerisque eleifend donec pretium
                        vulputate sapien nec. Quis hendrerit dolor magna eget
                        est lorem ipsum dolor.
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                ) : null}
              </Col>
            </Row>
            // <Card>
            //   <Card.Header>
            //     <Accordion.Toggle as={Button} variant="link" eventKey="Storia">
            //       {el}
            //     </Accordion.Toggle>
            //   </Card.Header>
            // </Card>
          );
        });
      // case "Ricerca"
      default:
        return;
    }
  }

  render() {
    return (
      <div>
        <Sections
          at={NoProfile.at}
          did={NoProfile.did}
          ric={NoProfile.ric}
          imp={NoProfile.imp}
          serv={NoProfile.serv}
          cName={"noprofile"}
          activate={true}
        />
        <Row className="firstRow">
          <Col xs lg="2">
            <h2>{this.props.root}</h2>
            <Accordion
              className="accordionContent"
              defaultActiveKey={this.props.location}
            >
              <Tab.Container defaultActiveKey={this.props.location}>
                {this.getElements()}
              </Tab.Container>
            </Accordion>
          </Col>
          {/* {this.state.activate ? <Col>Ciao</Col> : <Col>Oh no</Col>} */}
        </Row>
      </div>
    );
  }
}

export default Content;
