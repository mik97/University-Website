import React from "react";
import "../css/App.css";
import Logo from "./Logo";
import { Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import FuturoStudente from "./FuturoStudente";
import Studente from "./Studente";
import Laureato from "./Laureato";
import Docenti from "./Docenti";
import Personale from "./Personale";
import Imprese from "./Imprese";
import Content from "./Content";
import NoProfile from "../fileSystem/NoProfile.json";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-logo">
          <Logo />
        </div>
        <div className="home">
          <Route path={"/"} exact component={Home} />
          <Route path={"/futuro-studente"} component={FuturoStudente} />
          <Route path={"/studente"} component={Studente} />
          <Route path={"/laureato"} component={Laureato} />
          <Route path={"/docenti"} component={Docenti} />
          <Route path={"/personale"} component={Personale} />
          <Route path={"/entieimprese"} component={Imprese} />

          {NoProfile.at.map(el => {
            return (
              <Route path={"/Ateneo/" + el}>
                <Content
                  root="Ateneo"
                  location={window.location.href.substr(
                    window.location.href.indexOf("/Ateneo/") +
                      "/Ateneo/".length,
                    window.location.href.length
                  )}
                />
              </Route>
            );
          })}

          {NoProfile.did.map(el => {
            return (
              <Route path={"/Didattica/" + el}>
                <Content
                  root="Didattica"
                  location={window.location.href.substr(
                    window.location.href.indexOf("/Didattica/") +
                      "/Didattica/".length,
                    window.location.href.length
                  )}
                />
              </Route>
            );
          })}

          {NoProfile.ric.map(el => {
            return (
              <Route path={"/Ricerca/" + el}>
                <Content
                  root="Ricerca"
                  location={window.location.href.substr(
                    window.location.href.indexOf("/Ricerca/") +
                      "/Ricerca/".length,
                    window.location.href.length
                  )}
                />
              </Route>
            );
          })}
          {NoProfile.imp.map(el => {
            return (
              <Route path={"/Imprese e Territorio/" + el}>
                <Content
                  root="Imprese%20e%20Territorio"
                  location={window.location.href.substr(
                    window.location.href.indexOf("/Imprese%20e%20Territorio/") +
                      "/Imprese%20e%20Territorio/".length,
                    window.location.href.length
                  )}
                />
              </Route>
            );
          })}
          {NoProfile.serv.map(el => {
            return (
              <Route path={"/Servizi e Opportunità/" + el}>
                <Content
                  root="Servizi%20e%20Opportunità"
                  location={window.location.href.substr(
                    window.location.href.indexOf(
                      "/Servizi%20e%20Opportunità/"
                    ) + "/Servizi%20e%20Opportunità/".length,
                    window.location.href.length
                  )}
                />
              </Route>
            );
          })}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
