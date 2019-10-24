import React from "react";
import { Row, Col, Nav, Tab } from "react-bootstrap";
import "../css/Content.css";
import Sections from "./Sections";
import NoProfile from "../fileSystem/NoProfile.json";

class Content extends React.Component {
  whiteSpace(element) {
    var count = 0;
    var i;
    for (i = 0; i < element.length; i++) {
      if (element.charAt(i) === "%") {
        count++;
      }
    }

    return count;
  }

  replaceWhiteSpace(element) {
    var c = this.whiteSpace(element);

    while (c !== 0) {
      c--;
      element = element.replace("%20", " ");
    }

    return element;
  }

  getContent() {
    switch (this.props.root) {
      case "Ateneo":
        return NoProfile.at.map((el, index) => {
          return <Tab.Pane eventKey={el}>{"A" + index}</Tab.Pane>;
        });
      default:
        return;
    }
  }

  getElements(arr, name) {
    console.log(name);
    return arr.map(el => {
      if (el instanceof Array) {
        return (
          <Nav.Item>
            <Nav.Link eventKey={el[el.length - 1]} disabled>
              {el[el.length - 1]}
            </Nav.Link>
            {this.getElements(el, name + el[el.length - 1] + "/")}
          </Nav.Item>
        );
      }
      return (
        <Nav.Item>
          <Nav.Link eventKey={el} href={name + el}>
            {el}
          </Nav.Link>
        </Nav.Item>
      );
    });
  }

  selectType() {
    switch (this.props.root) {
      case "Ateneo":
        return this.getElements(NoProfile.at, "/Ateneo/");
      case "Didattica":
        return this.getElements(NoProfile.did, "/Didattica/");
      case "Ricerca":
        return this.getElements(NoProfile.ric, "/Ricerca/");
      case "Imprese%20e%20Territorio":
        return this.getElements(NoProfile.imp, "/Imprese%20e%20Territorio/");
      case "Servizi%20e%20Opportunità":
        return this.getElements(NoProfile.serv, "/Servizi%20e%20Opportunità/");
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

        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey={this.replaceWhiteSpace(this.props.location)}
        >
          <Row className="firstRow">
            <Col sm={3}>
              <h3>{this.replaceWhiteSpace(this.props.root)}</h3>
              <Nav variant="pills" className="flex-column">
                {this.selectType()}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>{this.getContent()}</Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default Content;
