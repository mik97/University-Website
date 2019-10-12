import React from "react";
import SlideShow from "./SlideShow";
import Tabs from "./Tabs";
import "../css/Home.css";
import Statistics from "./Statistics";

class Home extends React.Component {
  render() {
    return (
      <div>
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
