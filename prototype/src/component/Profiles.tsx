import React from "react";
import "../css/Profiles.css";
import { ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class Profiles extends React.Component {
  render() {
    return (
      <div className="profiles">
        <ButtonGroup>
          <Button variant="danger">Futuro Studente</Button>
          <Button variant="danger">Studente</Button>
          <Button variant="danger">Docenti o Ricercatori</Button>
          <Button variant="danger">Personale T/A</Button>
          <Button variant="danger">Enti e Imprese</Button>
          <Button variant="danger">International</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Profiles;
