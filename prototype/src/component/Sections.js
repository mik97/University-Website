import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Accordion,
  Card,
  Image,
  Button
} from "react-bootstrap";
import arrowDown from "../immagini/arrow-down.png";
import hamburger from "../immagini/hamburger.png";
import MediaQuery from "react-responsive";
import "../css/Sections.css";

class Sections extends React.Component {
  generateItem(arr, title) {
    if (arr !== null) {
      return arr.map((el, index) => {
        if (el instanceof Array) {
          const t = el[el.length - 1];
          var newArray = [];
          el.forEach(x => {
            if (x !== t) {
              newArray.push(x);
            }
          });
          return (
            <Accordion>
              <Card className="cardAccordion">
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey="0"
                  className="accordionMenu"
                >
                  {t}
                  <Image
                    src={arrowDown}
                    alt="arrowDown"
                    className="arrowDown"
                  />
                </Accordion.Toggle>
                <Accordion.Collapse className="menuBody" eventKey="0">
                  <Card.Body>
                    {this.generateItem(
                      newArray,
                      title + "/" + t.replace("à", "a")
                    )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        }

        return (
          <NavDropdown.Item
            href={this.props.type + title + "/" + el}
            key={"a" + index}
          >
            {el}
          </NavDropdown.Item>
        );
      });
    }
    return;
  }

  getContents(arr, title) {
    if (arr.length > 0) {
      return (
        <NavDropdown
          style={{ paddingLeft: 50, paddingRight: 50 }}
          title={title}
          id="basic-nav-dropdown"
        >
          {this.generateItem(arr, title)}
        </NavDropdown>
      );
    }
    return;
  }
  getAccordion(arr, title, index) {
    if (arr.length > 0) {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={index}>
            {title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index}>
            <Card.Body> {this.generateItem(arr, title)}</Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    }
    return;
  }

  render() {
    return (
      <Container fluid className={this.props.cName}>
        {/* desktop */}
        <MediaQuery minDeviceWidth={1224}>
          <Navbar variant="dark" bg="blue">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {this.getContents(this.props.at, "Ateneo")}
                {this.getContents(this.props.did, "Didattica")}
                {this.getContents(this.props.ric, "Ricerca")}
                {this.getContents(this.props.imp, "Imprese e Territorio")}
                {this.getContents(this.props.serv, "Servizi e Opportunità")}
              </Nav>
              <div>{this.props.name}</div>
            </Navbar.Collapse>
          </Navbar>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={1224}>
          <Accordion>
            <div>
              <Accordion.Toggle
                as={Button}
                style={{
                  background: "transparent",
                  border: "transparent"
                }}
                eventKey="0"
              >
                <img src={hamburger} alt="hamburger" className="hamburger" />{" "}
                Menu
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Accordion>
                  {this.getAccordion(this.props.at, "Ateneo", 1)}
                  {this.getAccordion(this.props.did, "Didattica", 2)}
                  {this.getAccordion(this.props.ric, "Ricerca", 3)}
                  {this.getAccordion(this.props.imp, "Imprese e Territorio", 4)}
                  {this.getAccordion(
                    this.props.serv,
                    "Servizi e Opportunità",
                    5
                  )}
                </Accordion>
              </Accordion.Collapse>
            </div>
          </Accordion>
        </MediaQuery>
      </Container>
    );
  }
}

export default Sections;
