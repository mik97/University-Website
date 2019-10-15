import React from "react";
import Graduate from "../fileSystem/Graduate.json";
import Sections from "./Sections.js";
import { Tab, Row, Col } from "react-bootstrap";
import ProfilesContent from "./ProfilesContent";
import Tabs from "./Tabs";

class Laureato extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Sections
            at={Graduate.at}
            did={Graduate.did}
            ric={Graduate.ric}
            imp={Graduate.imp}
            serv={Graduate.serv}
            name={"Laureato"}
            cName={"graduated"}
            activate={false}
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
                  <ProfilesContent titles={Graduate.row1} />
                </Tab.Content>
              </Col>
            </Row>
            <Row className="componentFuturo">
              <Col>
                <Tab.Content className="content">
                  <ProfilesContent titles={Graduate.row2} />
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

export default Laureato;
