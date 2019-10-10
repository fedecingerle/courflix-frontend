import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="acount">
          <p>CourseIT</p>
          <p>Cuenta</p>
        </div>
        <div className="films">
          <Link to="/">
            <p>Inicio</p>
          </Link>
          <Link to="/list">
            <p>Mi lista</p>
          </Link>
          <p>Agregados Recientemente</p>
          <Link to="/series">
            <p>Series</p>
          </Link>
          <Link to="/peliculas">
            <p>Peliculas</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
