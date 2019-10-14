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
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
