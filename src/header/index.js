import React from "react";
import logo from "../assets-tp/logo.png";
import "./style.scss";
import { Icon } from "react-fa";
import Nav from "../nav/index.js";
import { HashLink as Link } from "react-router-hash-link";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuMobile: false
    };
  }
  handleButton() {
    console.log("Nav");

    if (this.state.menuMobile == false) {
      this.setState({
        menuMobile: true
      });
    } else {
      this.setState({
        menuMobile: false
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="logoContainer">
            <button onClick={() => this.handleButton()}>
              <Icon className="arrow" name="align-justify" />
            </button>
            <img className="logo" src={logo} />
          </div>
          <ul className="items">
            <Link style={{ textDecoration: "none" }} to="/">
              <li>
                <strong> Inicio</strong>
              </li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/series">
              <li>Series</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/peliculas">
              <li>Peliculas</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/#recientes">
              <li>Agregados Recientemente</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/list">
              <li>Mi lista</li>
            </Link>
          </ul>
        </header>
        {this.state.menuMobile && <Nav />}
      </React.Fragment>
    );
  }
}

export default Header;
