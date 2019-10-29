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
import noprofile from "../fileSystem/noprofile.json";
import future from "../fileSystem/future.json";
import student from "../fileSystem/student.json";
import graduate from "../fileSystem/graduate.json";
import professor from "../fileSystem/professor.json";
import staff from "../fileSystem/staff.json";
import enterprise from "../fileSystem/enterprise.json";

class App extends React.Component {
  addSimbol(element) {
    for (var i = 0; i < element.length; i++) {
      if (element.charAt(i) === " ") {
        element = element.replace(" ", "%20");
      }
    }

    return element;
  }

  getRoute(arr, profile, name, path) {
    return arr.map(el => {
      if (el instanceof Array) {
        const last = el[el.length - 1].replace("à", "a");
        return this.getRoute(
          el,
          profile,
          name + "/" + last,
          path + "/" + this.addSimbol(last)
        );
      }
      return (
        <Route path={profile.urlName + name + "/" + el} exact>
          <Content
            type={profile}
            root={
              path.search("/") !== -1 ? path.substr(0, path.indexOf("/")) : path
            }
            location={window.location.href.substr(
              window.location.href.indexOf("/" + path + "/") +
                ("/" + path + "/").length,
              window.location.href.length
            )}
          />
        </Route>
      );
    });
  }

  getAllRoute(type) {
    return (
      <div>
        {this.getRoute(type.at, type, "Ateneo", "Ateneo")}
        {this.getRoute(type.did, type, "Didattica", "Didattica")}
        {this.getRoute(type.ric, type, "Ricerca", "Ricerca")}
        {this.getRoute(
          type.imp,
          type,
          "Imprese e Territorio",
          "Imprese%20e%20Territorio"
        )}
        {this.getRoute(
          type.serv,
          type,
          "Servizi e Opportunità",
          "Servizi%20e%20Opportunit%C3%A0"
        )}
      </div>
    );
  }

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
          <Route path={"/futuro-studente"} exact component={FuturoStudente} />
          <Route path={"/studente"} exact component={Studente} />
          <Route path={"/laureato"} exact component={Laureato} />
          <Route path={"/docenti"} exact component={Docenti} />
          <Route path={"/personale"} exact component={Personale} />
          <Route path={"/entieimprese"} exact component={Imprese} />

          {window.location.href.search(future.urlName) !== -1
            ? this.getAllRoute(future)
            : window.location.href.search(student.urlName) !== -1
            ? this.getAllRoute(student)
            : window.location.href.search(graduate.urlName) !== -1
            ? this.getAllRoute(graduate)
            : window.location.href.search(professor.urlName) !== -1
            ? this.getAllRoute(professor)
            : window.location.href.search(staff.urlName) !== -1
            ? this.getAllRoute(staff)
            : window.location.href.search(enterprise.urlName) !== -1
            ? this.getAllRoute(enterprise)
            : this.getAllRoute(noprofile)}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
