import React from "react";
import Student from "../fileSystem/Student.json";
import Sections from "./Sections.js";
import { Tab, Row, Col } from "react-bootstrap";
import ProfilesContent from "./ProfilesContent";
import Tabs from "./Tabs";

class Studente extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Sections
            at={Student.at}
            did={Student.did}
            ric={Student.ric}
            imp={Student.imp}
            serv={Student.serv}
            name={"Studente"}
            cName={"student"}
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
                  <ProfilesContent titles={Student.row1} />
                </Tab.Content>
              </Col>
            </Row>
            <Row className="componentFuturo">
              <Col>
                <Tab.Content className="content">
                  <ProfilesContent titles={Student.row2} />
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

export default Studente;
