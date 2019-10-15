import React from "react";
import Staff from "../fileSystem/Staff.json";
import Sections from "./Sections.js";
import { Tab, Row, Col } from "react-bootstrap";
import ProfilesContent from "./ProfilesContent";
import Tabs from "./Tabs";

class Personale extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Sections
            at={Staff.at}
            did={Staff.did}
            ric={Staff.ric}
            imp={Staff.imp}
            serv={Staff.serv}
            name={"Personale T/A"}
            cName={"staff"}
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
                  <ProfilesContent titles={Staff.row1} />
                </Tab.Content>
              </Col>
            </Row>
            <Row className="componentFuturo">
              <Col>
                <Tab.Content className="content">
                  <ProfilesContent titles={Staff.row2} />
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

export default Personale;
