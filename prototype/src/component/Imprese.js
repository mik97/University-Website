import React from "react";
import Enterprise from "../fileSystem/enterprise.json";
import Sections from "./Sections.js";
import { Tab, Row, Col } from "react-bootstrap";
import ProfilesContent from "./ProfilesContent";
import Tabs from "./Tabs";

class Imprese extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Sections
            at={Enterprise.at}
            did={Enterprise.did}
            ric={Enterprise.ric}
            imp={Enterprise.imp}
            serv={Enterprise.serv}
            type={Enterprise.urlName}
            name={Enterprise.name}
            cName={Enterprise.fileName}
          />
        </div>
        <div>
          <Tab.Container
            id="uncontrolled-tab-example"
            defaultActiveKey="eventi"
          >
            <Row className="componentFuturo">
              <Col>
                <Tab.Content className="content">
                  <ProfilesContent titles={Enterprise.row1} />
                </Tab.Content>
              </Col>
            </Row>
            <Row className="componentFuturo">
              <Col>
                <Tab.Content className="content">
                  <ProfilesContent titles={Enterprise.row2} />
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

export default Imprese;
