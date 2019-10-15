import React from "react";
import Sections from "./Sections";
import Future from "../fileSystem/Future.json";
import { Row, Col, Tab } from "react-bootstrap";
import ProfilesContent from "./ProfilesContent";
import "../css/FuturoStudente.css";

class FuturoStudente extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Sections
            at={Future.at}
            did={Future.did}
            ric={Future.ric}
            imp={Future.imp}
            serv={Future.serv}
            name={"Futuro Studente"}
            cName={"future"}
            activate={false}
          />
          <Tab.Container
            id="uncontrolled-tab-example"
            defaultActiveKey="eventi"
          >
            <Row className="componentFuturo">
              <Col>
                <Tab.Content className="content">
                  <ProfilesContent type={"Avviso"} />
                </Tab.Content>
              </Col>
            </Row>
            <Row className="componentFuturo">
              <Col>
                <Tab.Content className="content">
                  <ProfilesContent type={"Avviso"} />
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}

export default FuturoStudente;
