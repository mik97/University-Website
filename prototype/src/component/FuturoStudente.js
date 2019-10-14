import React from "react";
import Sections from "./Sections";
import Future from "../fileSystem/Future.json";
import { Route, Switch } from "react-router-dom";

class FuturoStudente extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Sections
            at={Future.at}
            did={Future.did}
            ric={Future.ric}
            imp={Future.imp}
            serv={Future.serv}
          />
        </div>
      </div>
    );
  }
}

export default FuturoStudente;
