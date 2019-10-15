import React from "react";
import Professor from "../fileSystem/Professor.json";
import Sections from "./Sections.js";
import { Tab, Row, Col } from "react-bootstrap";
import ProfilesContent from "./ProfilesContent";
import Tabs from "./Tabs";

class Docenti extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Sections
            at={Professor.at}
            did={Professor.did}
            ric={Professor.ric}
            imp={Professor.imp}
            serv={Professor.serv}
            name={"Docenti o Ricercatori"}
            cName={"professor"}
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
                  <ProfilesContent titles={Professor.row1} />
                </Tab.Content>
              </Col>
            </Row>
            <Row className="componentFuturo">
              <Col>
                <Tab.Content className="content">
                  <ProfilesContent titles={Professor.row2} />
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

export default Docenti;
