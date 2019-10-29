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
import { Link } from "react-router-dom";

class Profiles extends React.Component {
  render() {
    return (
      <Container className="containerProfiles">
        {/* desktop */}
        <MediaQuery minDeviceWidth={1224}>
          <ButtonGroup className="profiles">
            <Link className="futureP" to="/futuro-studente">
              Futuro Studente
            </Link>
            <Link className="studentP" to="/studente">
              Studente
            </Link>

            <Link className="graduateP" to="/laureato">
              Laureato
            </Link>

            <Link className="professorP" to="/docenti">
              Docenti o Ricercatori
            </Link>

            <Link className="staffP" to="/personale">
              Personale T/A
            </Link>

            <Link className="enterpriseP" to="/entieimprese">
              Enti e Imprese
            </Link>

            <Button
              variant="international"
              href="https://international.unicam.it"
            >
              International
            </Button>
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
                    <div className="profilesM">
                      <Link className="futureP" to="/futuro-studente">
                        Futuro Studente
                      </Link>
                    </div>

                    <div className="profilesM">
                      <Link className="studentP" to="/studente">
                        Studente
                      </Link>
                    </div>

                    <div className="profilesM">
                      <Link className="graduateP" to="/laureato">
                        Laureato
                      </Link>
                    </div>

                    <div className="profilesM">
                      <Link className="professorP" to="/docenti">
                        Docenti o Ricercatori
                      </Link>
                    </div>

                    <div className="profilesM">
                      <Link className="staffP" to="/personale">
                        Personale T/A
                      </Link>
                    </div>

                    <div className="profilesM">
                      <Link className="enterpriseP" to="/entieimprese">
                        Enti e Imprese
                      </Link>
                    </div>

                    <Button
                      className="profilesM"
                      variant="international"
                      href="https://international.unicam.it"
                    >
                      International
                    </Button>
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
