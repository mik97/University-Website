import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "../css/Sections.css";

class Sections extends React.Component {
  render() {
    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Navbar variant="dark" bg="blue">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown
                style={{ paddingLeft: 50, paddingRight: 50 }}
                title="Ateneo"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Storia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Governance
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Strutture
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Rapporto con il territorio
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Iniziative
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Calendario Accademico
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                style={{ paddingRight: 50 }}
                title="Didattica"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                style={{ paddingRight: 50 }}
                title="Ricerca"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                style={{ paddingRight: 50 }}
                title="Imprese e territorio"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                style={{ paddingRight: 50 }}
                title="Servizi e opportunità"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Sections;
