import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./component/App";
import * as serviceWorker from "./serviceWorker";

const arr = [
  "Storia",
  "Governance",
  "Strutture",
  "Rapporto con il territorio",
  "Iniziative",
  "Calendario Accademico"
];

const did = ["Offerta Formativa", "Servizi didattica", "Scuole di Ateneo"];

const ric = [
  "Dove fare ricerca",
  "Finanziamenti",
  "Portale ricercatori",
  "Iris",
  "Spin-off"
];

const imp = [
  "Rapporto con le imprese",
  "Stage e Placement",
  "Career Day",
  "Curriculum Vitae Studenti",
  "Start-up",
  "Attività nel territorio"
];

const serv = [
  "Segreterie Studenti",
  "Servizi Online",
  "StruttuBorse di studio e Agevolazionire",
  "Vivere l'università",
  "Servizi per la mobilità internazionale",
  "Utility",
  "Come raggiungerci"
];

ReactDOM.render(
  <App arr={arr} did={did} ric={ric} imp={imp} serv={serv} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
