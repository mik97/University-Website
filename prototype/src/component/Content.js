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
      if (element.search("%20") !== -1) {
        element = element.replace("%20", " ");
      } else {
        c--;
        element = element.replace("%C3%A0", "à");
      }
    }

    return element;
  }

  getContent() {
    switch (this.props.root) {
      case "Ateneo":
        return NoProfile.at.map((el, index) => {
          return <Tab.Pane eventKey={el + index}>{"A" + index}</Tab.Pane>;
        });
      default:
        return;
    }
  }

  isInternal(internal, name, el) {
    if (internal) {
      return (
        <Nav.Link eventKey={el} href={this.props.type.urlName + name + el}>
          &ensp;&ensp;&ensp;&ensp;{el}
        </Nav.Link>
      );
    } else {
      return (
        <Nav.Link eventKey={el} href={this.props.type.urlName + name + el}>
          {el}
        </Nav.Link>
      );
    }
  }

  getElements(arr, name, internal) {
    return arr.map((el, index) => {
      if (el instanceof Array) {
        const last = el[el.length - 1];
        var newArray = [];
        el.forEach(x => {
          if (x !== last) {
            newArray.push(x);
          }
        });

        return (
          <Nav.Item>
            <Nav.Link eventKey={last} disabled>
              {last}
            </Nav.Link>
            {this.getElements(newArray, name + last + "/", true)}
          </Nav.Item>
        );
      }
      return <Nav.Item>{this.isInternal(internal, name, el)}</Nav.Item>;
    });
  }

  selectType() {
    switch (this.props.root) {
      case "Ateneo":
        return this.getElements(this.props.type.at, "Ateneo/", false);
      case "Didattica":
        return this.getElements(this.props.type.did, "Didattica/", false);
      case "Ricerca":
        return this.getElements(this.props.type.ric, "Ricerca/", false);
      case "Imprese%20e%20Territorio":
        return this.getElements(
          this.props.type.imp,
          "Imprese%20e%20Territorio/",
          false
        );
      case "Servizi%20e%20Opportunit%C3%A0":
        return this.getElements(
          this.props.type.serv,
          "Servizi%20e%20Opportunit%C3%A0/",
          false
        );
      default:
        return;
    }
  }

  render() {
    return (
      <div>
        <Sections
          at={this.props.type.at}
          did={this.props.type.did}
          ric={this.props.type.ric}
          imp={this.props.type.imp}
          serv={this.props.type.serv}
          type={this.props.type.urlName}
          name={this.props.type.name}
          cName={this.props.type.fileName}
        />

        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey={this.replaceWhiteSpace(this.props.location)}
        >
          {/* {console.log(this.replaceWhiteSpace(this.props.location))} */}
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
