import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Accordion,
  Card
} from "react-bootstrap";
import arrowDown from "../immagini/arrow-down.png";
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
                  <img
                    src={arrowDown}
                    alt="arrowDown"
                    className="arrowDown"
                  />{" "}
                </Accordion.Toggle>
                <Accordion.Collapse className="menuBody" eventKey="0">
                  <Card.Body>
                    {this.generateItem(newArray, title + "/" + t)}
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

  render() {
    return (
      <Container fluid className={this.props.cName}>
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
      </Container>
    );
  }
}

export default Sections;
