import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "../css/Sections.css";

interface ISectionsProps {
  ateneo: String[];
  didattica: String[];
  ricerca: String[];
  imprese: String[];
  servizi: String[];
}

interface ISectionsState {
  future?: boolean;
}

class Sections extends React.Component<ISectionsProps, ISectionsState> {
  constructor(props?: any) {
    super(props);
  }

  getContent(arr: String[]) {
    let text;

    if (arr !== undefined) {
      text = arr.map((t, index) => {
        return <NavDropdown.Item key={"a" + index}>{t}</NavDropdown.Item>;
      });
    }

    return text;
  }

  isEmpty(arr: String[], title: string) {
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
  }

  render() {
    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Navbar variant="dark" bg="blue">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {this.isEmpty(this.props.ateneo, "Ateneo")}
              {this.isEmpty(this.props.didattica, "Didattica")}
              {this.isEmpty(this.props.ricerca, "Ricerca")}
              {this.isEmpty(this.props.imprese, "Imprese e Territorio")}
              {this.isEmpty(this.props.servizi, "Servizi e Opportunità")}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Sections;
