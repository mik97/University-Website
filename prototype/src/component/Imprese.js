import React from "react";
import Enterprise from "../fileSystem/Enterprise.json";
import Sections from "./Sections.js";

class Imprese extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Sections
            at={Enterprise.at}
            did={Enterprise.did}
            ric={Enterprise.ric}
            imp={Enterprise.imp}
            serv={Enterprise.serv}
          />
        </div>
      </div>
    );
  }
}

export default Imprese;
