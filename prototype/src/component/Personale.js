import React from "react";
import Staff from "../fileSystem/Staff.json";
import Sections from "./Sections.js";

class Personale extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Sections
            at={Staff.at}
            did={Staff.did}
            ric={Staff.ric}
            imp={Staff.imp}
            serv={Staff.serv}
          />
        </div>
      </div>
    );
  }
}

export default Personale;
