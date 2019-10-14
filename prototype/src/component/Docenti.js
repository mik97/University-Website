import React from "react";
import Professor from "../fileSystem/Professor.json";
import Sections from "./Sections.js";

class Docenti extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Sections
            at={Professor.at}
            did={Professor.did}
            ric={Professor.ric}
            imp={Professor.imp}
            serv={Professor.serv}
          />
        </div>
      </div>
    );
  }
}

export default Docenti;
