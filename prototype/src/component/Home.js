import React from "react";
import SlideShow from "./SlideShow";
import Tabs from "./Tabs";
import "../css/Home.css";
import Statistics from "./Statistics";
import Sections from "./Sections";
import NoProfile from "../fileSystem/NoProfile.json";

class Home extends React.Component {
  render() {
    return (
      <div className="mainHome">
        <div>
          <Sections
            at={NoProfile.at}
            did={NoProfile.did}
            ric={NoProfile.ric}
            imp={NoProfile.imp}
            serv={NoProfile.serv}
          />
        </div>
        <div className="slideShow">
          <SlideShow />
        </div>
        <div className="tabs">
          <Tabs />
        </div>
        <div className="statistics">
          <Statistics />
        </div>
      </div>
    );
  }
}

export default Home;
