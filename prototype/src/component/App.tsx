import React from "react";
import "../css/App.css";
import Logo from "./Logo";
import Sections from "./Sections";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";

const App: React.FC = () => {
  return (
    <div className="main">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-logo">
        <Logo />
      </div>
      <div>
        <Sections />
      </div>
      <div className="home">
        <Home />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
