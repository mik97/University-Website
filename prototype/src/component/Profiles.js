import React from "react";
import "../css/Profiles.css";
import {
  ButtonGroup,
  Button,
  Container,
  Accordion,
  Card,
  Image
} from "react-bootstrap";
import MediaQuery from "react-responsive";
import users from "../immagini/users.png";

class Profiles extends React.Component {
  render() {
    return (
      <Container className="containerProfiles">
        {/* desktop */}
        <MediaQuery minDeviceWidth={1224}>
          <ButtonGroup className="profiles">
            <Button variant="future" href="/futuro-studente">
              Futuro Studente
            </Button>
            <Button variant="student" href="/studente">
              Studente
            </Button>
            <Button variant="graduate" href="/laureato">
              Laureato
            </Button>
            <Button variant="professor" href="/docenti">
              Docenti o Ricercatori
            </Button>
            <Button variant="staff" href="/personale">
              Personale T/A
            </Button>
            <Button variant="enterprise" href="/entieimprese">
              Enti e Imprese
            </Button>
            <Button variant="international">International</Button>
          </ButtonGroup>
        </MediaQuery>
        {/* mobile */}
        <MediaQuery maxDeviceWidth={1224}>
          <Accordion>
            <Card className="profilesCard">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <Image src={users} alt="users" className="users" /> Profili
                tematici
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ButtonGroup className="profilesMobile">
                    <Button variant="future" href="/futuro-studente">
                      Futuro Studente
                    </Button>
                    <Button variant="student" href="/studente">
                      Studente
                    </Button>
                    <Button variant="graduate" href="/laureato">
                      Laureato
                    </Button>
                    <Button variant="professor" href="/docenti">
                      Docenti o Ricercatori
                    </Button>
                    <Button variant="staff" href="/personale">
                      Personale T/A
                    </Button>
                    <Button variant="enterprise" href="/entieimprese">
                      Enti e Imprese
                    </Button>
                    <Button variant="international">International</Button>
                  </ButtonGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </MediaQuery>
      </Container>
    );
  }
}

export default Profiles;
