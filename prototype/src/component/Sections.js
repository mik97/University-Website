import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  DropdownButton
} from "react-bootstrap";
import "../css/Sections.css";

class Sections extends React.Component {
  generateItem(arr, title) {
    if (arr !== null) {
      return arr.map((el, index) => {
        if (el instanceof Array) {
          const t = el.pop();
          return (
            <DropdownButton
              drop={"right"}
              variant="custom"
              title={t}
              id="dropdown-button-drop-right"
              key={"right" + index}
            >
              {this.generateItem(el, title + "/" + t)}
            </DropdownButton>
          );
        }

        return (
          <NavDropdown.Item href={"/" + title + "/" + el} key={"a" + index}>
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
            <div hidden={this.props.activate}>{this.props.name}</div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Sections;
