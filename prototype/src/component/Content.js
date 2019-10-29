import React from "react";
import { Nav, Tab, Container } from "react-bootstrap";
import "../css/Content.css";
import Sections from "./Sections";

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

  getContent(arr) {
    return arr.map(el => {
      if (el instanceof Array) {
        return this.getContent(el);
      }
      return (
        <Tab.Pane eventKey={el}>
          <h2>{el}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
            eget nunc lobortis mattis aliquam faucibus purus in.
            <br />
            <br />
            Tortor at auctor urna nunc id cursus metus. Aliquam nulla facilisi
            cras fermentum odio. Phasellus faucibus scelerisque eleifend donec.
            Sagittis purus sit amet volutpat. Commodo nulla facilisi nullam
            vehicula ipsum a arcu cursus. <br />
            <br />
            Tincidunt eget nullam non nisi est sit amet facilisis magna. Purus
            ut faucibus pulvinar elementum integer enim. In ornare quam viverra
            orci sagittis.
          </p>
        </Tab.Pane>
      );
    });
  }

  selectTypeContent() {
    switch (this.replaceWhiteSpace(this.props.root)) {
      case "Ateneo":
        return this.getContent(this.props.type.at);
      case "Didattica":
        return this.getContent(this.props.type.did);
      case "Ricerca":
        return this.getContent(this.props.type.ric);
      case "Imprese e Territorio":
        return this.getContent(this.props.type.imp);
      case "Servizi e Opportunità":
        return this.getContent(this.props.type.serv);
      default:
        return;
    }
  }

  isInternal(internal, name, el) {
    if (internal) {
      return (
        <Nav.Link className="linkContent" variant="linkContent" eventKey={el}>
          &ensp;&ensp;&ensp;&ensp;{el}
        </Nav.Link>
      );
    } else {
      return (
        <Nav.Link className="linkContent" variant="linkContent" eventKey={el}>
          {el}
        </Nav.Link>
      );
    }
  }

  getElements(arr, name, internal) {
    return arr.map(el => {
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
            <Nav.Link className="linkContent">{last}</Nav.Link>
            {this.getElements(newArray, name + last + "/", true)}
          </Nav.Item>
        );
      }
      return (
        <Nav.Item>
          {this.isInternal(internal, name.replace("à", "a"), el)}
        </Nav.Item>
      );
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

        <Container className="sectionsContent">
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey={this.replaceWhiteSpace(this.props.location)}
          >
            <div>
              <h3 className="menuTitle">
                {this.replaceWhiteSpace(this.props.root)}
              </h3>
              <Nav variant="linkContent" className="flex-column">
                {this.selectType()}
              </Nav>
            </div>
            <div className="elementContent">
              <Tab.Content>{this.selectTypeContent()}</Tab.Content>
            </div>
            {/* <Row className="firstRow">
            <Col sm={3}>
              <h3 className="menuTitle">
                {this.replaceWhiteSpace(this.props.root)}
              </h3>
              <Nav variant="linkContent" className="flex-column">
                {this.selectType()}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>{this.selectTypeContent()}</Tab.Content>
            </Col>
          </Row> */}
          </Tab.Container>
        </Container>
      </div>
    );
  }
}

export default Content;
