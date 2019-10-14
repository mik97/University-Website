import React from "react";
import "../css/Profiles.css";
import { ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class Profiles extends React.Component {
  render() {
    return (
      <div className="profiles">
        <ButtonGroup>
          <Button variant="danger" href="futuro-studente">
            Futuro Studente
          </Button>
          <Button variant="danger" href="studente">
            Studente
          </Button>
          <Button variant="danger" href="laureato">
            Laureato
          </Button>
          <Button variant="danger" href="docenti">
            Docenti o Ricercatori
          </Button>
          <Button variant="danger" href="personale">
            Personale T/A
          </Button>
          <Button variant="danger" href="entieimprese">
            Enti e Imprese
          </Button>
          <Button variant="danger">International</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Profiles;
