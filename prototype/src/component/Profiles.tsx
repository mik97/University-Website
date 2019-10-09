import React from "react";
import "../css/Profiles.css";
import { ButtonGroup, Button } from "react-bootstrap";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";

interface IProfilesProps {}

class Profiles extends React.Component<IProfilesProps> {
  setContents() {
    const arr = [
      "Il sistema universitario",
      "Guida dello studente",
      "Strutture"
    ];

    const did = [
      "Verifica della preparazione iniziale",
      "Orientamento",
      "Offerta formativa"
    ];

    const ric: String[] = [];

    const imp: String[] = [];

    const serv = [
      "Immatricolazioni",
      "Disabilità e DSA",
      "Borse di studio e Agevolazioni",
      "Vivere la città",
      "Associazioni e tempo libero",
      "Servizi online",
      "Come raggiungerci"
    ];
    ReactDOM.render(
      <App arr={arr} did={did} ric={ric} imp={imp} serv={serv} />,
      document.getElementById("root")
    );
  }

  render() {
    return (
      <div className="profiles">
        <ButtonGroup>
          <Button variant="danger" onClick={this.setContents}>
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
