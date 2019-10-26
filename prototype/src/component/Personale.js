import React from "react";
import Staff from "../fileSystem/staff.json";
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
            type={Staff.urlName}
            name={Staff.name}
            cName={Staff.fileName}
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
                  <ProfilesContent
                    titles={Staff.row1}
                    links={Staff.link1}
                    name={Staff.urlName}
                  />
                </Tab.Content>
              </Col>
            </Row>
            <Row className="componentFuturo">
              <Col>
                <Tab.Content className="content">
                  <ProfilesContent
                    titles={Staff.row2}
                    links={Staff.link2}
                    name={Staff.urlName}
                  />
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
