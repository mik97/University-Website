import React from "react";
import Graduate from "../fileSystem/Graduate.json";
import Sections from "./Sections.js";

class Laureato extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Sections
            at={Graduate.at}
            did={Graduate.did}
            ric={Graduate.ric}
            imp={Graduate.imp}
            serv={Graduate.serv}
            name={"Laureato"}
            cName={"graduated"}
            activate={false}
          />
        </div>
      </div>
    );
  }
}

export default Laureato;
