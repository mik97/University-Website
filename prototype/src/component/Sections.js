import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "../css/Sections.css";

class Sections extends React.Component {
  getContent(arr) {
    if (arr !== null) {
      return arr.map((el, index) => {
        return <NavDropdown.Item key={"a" + index}>{el}</NavDropdown.Item>;
      });
    }
  }

  chooseContents(arr, title) {
    if (arr.length > 0) {
      return (
        <NavDropdown
          style={{ paddingLeft: 50, paddingRight: 50 }}
          title={title}
          id="basic-nav-dropdown"
        >
          {this.getContent(arr)}
        </NavDropdown>
      );
    }

    return;
  }

  render() {
    return (
      <Container fluid>
        <Navbar variant="dark" bg="blue">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {this.chooseContents(this.props.at, "Ateneo")}
              {this.chooseContents(this.props.did, "Didattica")}
              {this.chooseContents(this.props.ric, "Ricerca")}
              {this.chooseContents(this.props.imp, "Imprese e Territorio")}
              {this.chooseContents(this.props.serv, "Servizi e Opportunità")}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Sections;
