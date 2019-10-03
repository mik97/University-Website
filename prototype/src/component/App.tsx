import React from "react";
import "../css/App.css";
import Logo from "./Logo";
import Sections from "./Sections";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <body>
      <div>
        <div className="App-logo">
          <Logo />
        </div>
        <div className="sections">
          <Sections />
        </div>
        <Home />
      </div>
      <div className="home"></div>
    </body>
  );
};

export default App;
