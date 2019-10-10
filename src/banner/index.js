import React from "react";
import "./style.scss";
import Button from "../button/index.js";
import { Link } from "react-router-dom";
class Banner extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="imageBackground"></div>
        <div className="informationContainer">
          <div className="origin">
            <h3>ORIGINAL DE</h3>
            <h2>COURFLIX</h2>
          </div>
          <h1>BLACK SUMMER</h1>
          <div className="buttonContainer">
            <Link to="/films">
              <Button className="button" name={"play"} button={"Reproducir"} />
            </Link>
            <Button className="button" name={"plus"} button={"Mi lista"} />
          </div>
          <div className="info">
            <span className="season">Ve la temporada 1</span>
            <span className="description">
              Arden los primeros días del apocalipsis zombi como un
              <br /> crepúsculo irrevocable. No se conocen, pero saben que solos
              <br /> no sobrevirán ni regresarán con sus seres queridos
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
