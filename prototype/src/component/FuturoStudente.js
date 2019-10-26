import React from "react";
import Sections from "./Sections";
import Future from "../fileSystem/Future.json";
import { Row, Col, Tab } from "react-bootstrap";
import ProfilesContent from "./ProfilesContent";
import "../css/FuturoStudente.css";
import Tabs from "./Tabs";

class FuturoStudente extends React.Component {
  render() {
    return (
      <div>
        <Sections
          at={Future.at}
          did={Future.did}
          ric={Future.ric}
          imp={Future.imp}
          serv={Future.serv}
          type={Future.urlName}
          name={Future.name}
          cName={Future.fileName}
        />
        <div>
          <Tab.Container
            id="uncontrolled-tab-example"
            defaultActiveKey="eventi"
          >
            <Row className="componentFuturo">
              <Col>
                <Tab.Content className="content">
                  <ProfilesContent titles={Future.row1} />
                </Tab.Content>
              </Col>
            </Row>
            <Row className="componentFuturo">
              <Col>
                <Tab.Content className="content">
                  <ProfilesContent titles={Future.row2} />
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div className="tabs">
          <Tabs />
        </div>
      </div>
    );
  }
}

export default FuturoStudente;
