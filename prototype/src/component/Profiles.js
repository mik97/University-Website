import React from "react";
import "../css/Profiles.css";
import { ButtonGroup, Button } from "react-bootstrap";

class Profiles extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Profiles;
