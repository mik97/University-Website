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
  getContent(arr, title) {
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
              {this.getContent(el, title + "/" + t)}
            </DropdownButton>
          );
        }

        return (
          <NavDropdown.Item href={"/" + title} key={"a" + index}>
            {el}
          </NavDropdown.Item>
        );
      });
    }
    return;
  }

  chooseContents(arr, title) {
    if (arr.length > 0) {
      return (
        <NavDropdown
          style={{ paddingLeft: 50, paddingRight: 50 }}
          title={title}
          id="basic-nav-dropdown"
        >
          {this.getContent(arr, title)}
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
              {this.chooseContents(this.props.at, "Ateneo")}
              {this.chooseContents(this.props.did, "Didattica")}
              {this.chooseContents(this.props.ric, "Ricerca")}
              {this.chooseContents(this.props.imp, "Imprese e Territorio")}
              {this.chooseContents(this.props.serv, "Servizi e Opportunità")}
            </Nav>
            <div hidden={this.props.activate}>{this.props.name}</div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Sections;
