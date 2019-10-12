import React from "react";
import "../css/App.css";
import Logo from "./Logo";
import Sections from "./Sections";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

const at = [
  "Storia",
  "Governance",
  "Strutture",
  "Rapporto con il territorio",
  "Iniziative",
  "Calendario Accademico"
];

const did = ["Offerta Formativa", "Servizi didattica", "Scuole di Ateneo"];

const ric = [
  "Dove fare ricerca",
  "Finanziamenti",
  "Portale ricercatori",
  "Iris",
  "Spin-off"
];

const imp = [
  "Rapporto con le imprese",
  "Stage e Placement",
  "Career Day",
  "Curriculum Vitae Studenti",
  "Start-up",
  "Attività nel territorio"
];

const serv = [
  "Segreterie Studenti",
  "Servizi Online",
  "Borse di studio e Agevolazionire",
  "Vivere l'università",
  "Servizi per la mobilità internazionale",
  "Utility",
  "Come raggiungerci"
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      at: null,
      did: null,
      ric: null,
      imp: null,
      serv: null,
      home: false
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.setState({ at: at, did: did, ric: ric, imp: imp, serv: serv });
  }

  onChange(at, did, ric, imp, serv) {
    this.setState({
      at: at,
      did: did,
      ric: ric,
      imp: imp,
      serv: serv,
      home: true
    });
    console.log("OK");
  }

  render() {
    return (
      <div className="main">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-logo">
          <Logo onChange={this.onChange} />
        </div>
        <div>
          <Sections
            at={this.state.at}
            did={this.state.did}
            ric={this.state.ric}
            imp={this.state.imp}
            serv={this.state.serv}
          />
          ;
        </div>
        <div className="home" hidden={this.state.home}>
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
