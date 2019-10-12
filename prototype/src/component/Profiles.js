import React from "react";
import "../css/Profiles.css";
import { ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const at = ["Il sistema universitario", "Guida dello studente", "Strutture"];

const did = [
  "Verifica della preparazione iniziale",
  "Orientamento",
  "Offerta formativa"
];

const ric = [];

const imp = [];

const serv = [
  "Immatricolazioni",
  "Disabilità e DSA",
  "Borse di studio e Agevolazioni",
  "Vivere la città",
  "Associazioni e tempo libero",
  "Servizi online",
  "Come raggiungerci"
];

class Profiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = { arr: null };
    this.setArray = this.setArray.bind(this);
  }

  setArray() {
    this.props.setContents(at, did, ric, imp, serv);
  }

  render() {
    return (
      <div className="profiles">
        <ButtonGroup>
          <Button variant="danger" onClick={this.setArray}>
            Futuro Studente
          </Button>
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
