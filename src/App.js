import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home.js";
import Film from "./film/index.js";
import Header from "./header/index.js";
import Peliculas from "./peliculas/index";
import List from "./miLista/index";
import Series from "./series";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route path="/peliculas" exact component={Peliculas} />
          <Route path="/" exact component={Home} />
          <Route path="/films" exact component={Film} />
          <Route path="/list" exact component={List} />
          <Route path="/series" exact component={Series} />
        </Router>
      </div>
    );
  }
}

export default App;
