import React from "react";
import Student from "../fileSystem/Student.json";
import Sections from "./Sections.js";

class Studente extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Sections
            at={Student.at}
            did={Student.did}
            ric={Student.ric}
            imp={Student.imp}
            serv={Student.serv}
            name={"Studente"}
            cName={"student"}
            activate={false}
          />
        </div>
      </div>
    );
  }
}

export default Studente;
