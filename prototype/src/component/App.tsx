import React from "react";
import "../css/App.css";
import Logo from "./Logo";
import Sections from "./Sections";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";

interface IAppProps {
  arr: String[];
  did: String[];
  ric: String[];
  imp: String[];
  serv: String[];
}

class App extends React.Component<IAppProps> {
  constructor(props?: any) {
    super(props);
  }

  render() {
    console.log("ok");
    return (
      <div className="main">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-logo">
          <Logo />
        </div>
        <div>
          <Sections
            ateneo={this.props.arr}
            didattica={this.props.did}
            ricerca={this.props.ric}
            imprese={this.props.imp}
            servizi={this.props.serv}
          />
        </div>
        <div className="home">
          <Home />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
